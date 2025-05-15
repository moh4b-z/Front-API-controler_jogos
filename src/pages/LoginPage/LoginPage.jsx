import React, { useState } from 'react'
import './LoginPage.css'

// Funções de login (importe do seu sistema)
import putLoginEmpresa from '../../services/empresa/postEmpresa'
import putLoginUsuario from '../../services/user/postUsuario'

export default function LoginPage() {
  const [tipoLogin, setTipoLogin] = useState('usuario'); // 'usuario' ou 'empresa'
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.senha) {
      alert('Preencha todos os campos.');
      return;
    }

    if (tipoLogin === 'usuario') {
      await putLoginUsuario(formData);
    } else {
      await putLoginEmpresa(formData);
    }
  };

  return (
    <div className="login-container">
      <div className="toggle-buttons">
        <button
          onClick={() => setTipoLogin('usuario')}
          className={tipoLogin === 'usuario' ? 'ativo' : ''}
        >
          Pessoa
        </button>
        <button
          onClick={() => setTipoLogin('empresa')}
          className={tipoLogin === 'empresa' ? 'ativo' : ''}
        >
          Empresa
        </button>
      </div>

      <form onSubmit={handleSubmit} className="form-login">
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          onChange={handleChange}
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
