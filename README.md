# Portfólio - Italo Kaiq

Um portfólio moderno e responsivo desenvolvido com React, Vite e shadcn/ui, inspirado no design do Behance.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool rápido e moderno
- **TailwindCSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes UI modernos
- **Lucide React** - Ícones SVG
- **EmailJS** - Envio de emails pelo frontend

## 📋 Funcionalidades

### 🏠 Home/Apresentação
- Frase de apresentação direta
- Avatar/foto profissional
- Botões para LinkedIn, GitHub e Currículo PDF
- Design com gradientes modernos

### 👨‍💻 Sobre Mim
- História pessoal e profissional
- Motivações e objetivos
- Principais stacks tecnológicas
- Layout em cards responsivos

### 🚀 Projetos
- Showcase de 4-6 projetos principais
- Projetos em destaque com maior visibilidade
- Tecnologias utilizadas em cada projeto
- Links para demo e repositório GitHub
- Efeitos hover interativos

### 🛠️ Habilidades
- Categorização por tipo (Linguagens, Front-end, Back-end, Ferramentas)
- Barras de progresso animadas
- Ícones representativos para cada tecnologia
- Níveis de proficiência visual

### 📞 Contato
- Formulário funcional com validação
- Campos: Nome, Email, Assunto, Mensagem
- Integração com EmailJS para envio
- Informações de contato e redes sociais

## 🎨 Design

- **Estilo Behance**: Design moderno e profissional
- **Responsivo**: Funciona em desktop, tablet e mobile
- **Dark/Light Mode**: Toggle de tema
- **Animações**: Transições suaves e efeitos hover
- **Gradientes**: Uso de gradientes azul/roxo para destaque

## 🚀 Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Build para produção:**
   ```bash
   npm run build
   ```

## 📧 Configuração do EmailJS

Para o formulário de contato funcionar:

1. Crie uma conta no [EmailJS](https://www.emailjs.com/)
2. Configure um serviço de email
3. Crie um template de email
4. Adicione suas credenciais no componente Contact.jsx

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/           # Componentes shadcn/ui
│   └── Navigation.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   └── Contact.jsx
├── lib/
│   └── utils.js      # Utilitários
└── App.jsx
```

## 🎯 Próximos Passos

- [ ] Adicionar projetos reais com imagens
- [ ] Configurar EmailJS para formulário
- [ ] Adicionar animações com Framer Motion
- [ ] Implementar blog/artigos
- [ ] Adicionar analytics
- [ ] Deploy no Vercel/Netlify

## 📝 Personalização

Para personalizar o portfólio:

1. **Informações pessoais**: Edite os textos em cada página
2. **Projetos**: Substitua os projetos de exemplo pelos seus
3. **Habilidades**: Ajuste as tecnologias e níveis
4. **Cores**: Modifique as cores no tailwind.config.js
5. **Imagens**: Adicione suas fotos e screenshots dos projetos

---

Desenvolvido com ❤️ por Italo Kaiq