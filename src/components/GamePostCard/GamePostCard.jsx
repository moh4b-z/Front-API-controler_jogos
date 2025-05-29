import React, { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import getOpcoesPublicacao from '../../services/jogo/getOpcoesPublicacao'
import postJogo from '../../services/jogo/postJogo'

export default function GamePostCard() {
    const { user } = useAuth()

    const [jogo, setJogo] = useState({
        nome: '',
        data_lancamento: '',
        versao: '',
        tamanho: '',
        descricao: '',
        link: '',
        foto_capa: '',
        id_jogo_base: null,
        is_dlc: false,
        publisherId: user?.id || null,
        id_paises: user?.id_paises || null,
        categorias: [],
        plataformas_pagamento: []
    })

    const [opcoes, setOpcoes] = useState({
        categorias: [],
        plataformas: [],
        tipos_pagamento: [],
        jogos_base: []
    })

    useEffect(() => {
        async function fetchOpcoes() {
            const data = await getOpcoesPublicacao()
            if (data) {
                setOpcoes({
                    categorias: data.categorias,
                    plataformas: data.plataformas,
                    tipos_pagamento: data.tipos_pagamento,
                    jogos_base: data.jogos_base
                })
            }
        }
        fetchOpcoes()
    }, [])

    function handleInputChange(e) {
        const { name, value } = e.target
        setJogo(prev => ({ ...prev, [name]: value }))
    }

    function handleCheckboxChange(e) {
        const { name, checked } = e.target
        setJogo(prev => ({ ...prev, [name]: checked }))
    }

    function handleArrayChange(name, value) {
        setJogo(prev => ({ ...prev, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        const jogoFinal = {
            ...jogo,
            publisherId: user?.id,
            id_paises: user?.id_paises,
        }
        postJogo(jogoFinal)
    }

    return (
        <div className="card">
            <h2>Criar Novo Jogo</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nome" value={jogo.nome} onChange={handleInputChange} placeholder="Nome do jogo" required />
                <input type="date" name="data_lancamento" value={jogo.data_lancamento} onChange={handleInputChange} required />
                <input type="text" name="versao" value={jogo.versao} onChange={handleInputChange} placeholder="Versão" required />
                <input type="text" name="tamanho" value={jogo.tamanho} onChange={handleInputChange} placeholder="Tamanho (ex: 2GB)" required />
                <textarea name="descricao" value={jogo.descricao} onChange={handleInputChange} placeholder="Descrição" required />
                <input type="url" name="link" value={jogo.link} onChange={handleInputChange} placeholder="Link" required />
                <input type="url" name="foto_capa" value={jogo.foto_capa} onChange={handleInputChange} placeholder="Link da foto da capa" required />

                <label>
                    <input type="checkbox" name="is_dlc" checked={jogo.is_dlc} onChange={handleCheckboxChange} /> É DLC?
                </label>

                {jogo.is_dlc && (
                    <select name="id_jogo_base" value={jogo.id_jogo_base || ''} onChange={handleInputChange} required>
                        <option value=''>Selecione o jogo base</option>
                        {opcoes.jogos_base.map(jogo => (
                            <option key={jogo.id} value={jogo.id}>{jogo.nome}</option>
                        ))}
                    </select>
                )}

                <label>Categorias:</label>
                <select multiple value={jogo.categorias} onChange={e => handleArrayChange('categorias', Array.from(e.target.selectedOptions, opt => opt.value))}>
                    {opcoes.categorias.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.nome}</option>
                    ))}
                </select>

                <label>Plataformas e tipo de pagamento:</label>
                {opcoes.plataformas.map(plat => (
                    <div key={plat.id}>
                        <strong>{plat.nome}</strong>
                        {opcoes.tipos_pagamento.map(tp => (
                            <div key={tp.id}>
                                <label>{tp.nome}</label>
                                <input
                                    type="number"
                                    min="0"
                                    placeholder="Preço"
                                    onChange={e => {
                                        const preco = e.target.value
                                        setJogo(prev => {
                                            const atual = [...prev.plataformas_pagamento.filter(p => !(p.id_plataforma === plat.id && p.id_tipo_pagamento === tp.id))]
                                            if (preco) {
                                                atual.push({ id_plataforma: plat.id, id_tipo_pagamento: tp.id, preco: parseFloat(preco) })
                                            }
                                            return { ...prev, plataformas_pagamento: atual }
                                        })
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                ))}

                <button type="submit">Publicar Jogo</button>
            </form>
        </div>
    )
}
