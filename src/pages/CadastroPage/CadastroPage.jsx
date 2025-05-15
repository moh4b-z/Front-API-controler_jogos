import React, { useState, useEffect } from 'react';

// Funções de API (exemplo, você deve importar ou definir no seu projeto real)
import postUsuario from '../../services/user/postUsuario'
import postEmpresa from '../../services/empresa/postEmpresa'
import getSearchAllPaises from '../../services/paises/getSearchAllPaises'
import getSearchAllSexo from '../../services/sexo/getSearchAllSexo'

export default function CadastroPage() {
  const [tipoCadastro, setTipoCadastro] = useState('usuario'); // 'usuario' ou 'empresa'
  const [formData, setFormData] = useState({});
  const [paises, setPaises] = useState([]);
  const [sexos, setSexos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const paisesData = await getSearchAllPaises();
      setPaises(paisesData);

      const sexosData = await getSearchAllSexo();
      setSexos(sexosData);
    }
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { senha, confirmarSenha, ...data } = formData;

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    data.senha = senha; // Envia senha para o backend, que cuidará de criptografar

    if (tipoCadastro === 'usuario') {
      await postUsuario(data);
    } else {
      await postEmpresa(data);
    }
  };

  const renderUsuarioForm = () => (
    <>
      <input type="text" name="nome" placeholder="Nome" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="date" name="data_de_nascimento" onChange={handleChange} required />
      <select name="id_sexo" onChange={handleChange} required>
        <option value="">Selecione o sexo</option>
        {sexos.map(sexo => (
          <option key={sexo.id} value={sexo.id}>{sexo.nome}</option>
        ))}
      </select>
      <select name="id_paises" onChange={handleChange} required>
        <option value="">Selecione o país</option>
        {paises.map(pais => (
          <option key={pais.id} value={pais.id}>{pais.nome}</option>
        ))}
      </select>
      <textarea name="biografia" placeholder="Biografia" onChange={handleChange} />
      <input type="text" name="foto_perfil" placeholder="URL da foto de perfil" onChange={handleChange} />
    </>
  );

  const renderEmpresaForm = () => (
    <>
      <input type="text" name="nome" placeholder="Nome da Empresa" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="date" name="data_de_fundacao" onChange={handleChange} required />
      <select name="id_paises" onChange={handleChange} required>
        <option value="">Selecione o país</option>
        {paises.map(pais => (
          <option key={pais.id} value={pais.id}>{pais.nome}</option>
        ))}
      </select>
      <textarea name="biografia" placeholder="Biografia da empresa" onChange={handleChange} />
      <input type="text" name="foto" placeholder="URL da logo" onChange={handleChange} />
    </>
  );

  return (
    <div className="cadastro-container">
      <div className="toggle-buttons">
        <button
          onClick={() => setTipoCadastro('usuario')}
          className={tipoCadastro === 'usuario' ? 'ativo' : ''}
        >
          Pessoa
        </button>
        <button
          onClick={() => setTipoCadastro('empresa')}
          className={tipoCadastro === 'empresa' ? 'ativo' : ''}
        >
          Empresa
        </button>
      </div>

      <form onSubmit={handleSubmit} className="form-cadastro">
        {tipoCadastro === 'usuario' ? renderUsuarioForm() : renderEmpresaForm()}
        <input type="password" name="senha" placeholder="Senha" onChange={handleChange} required />
        <input type="password" name="confirmarSenha" placeholder="Confirmar senha" onChange={handleChange} required />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
