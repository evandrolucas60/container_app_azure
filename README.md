
# 🚀 Projeto: Container App com Nginx

![Docker](https://img.shields.io/badge/docker-ready-blue)  
![License](https://img.shields.io/badge/license-MIT-green)

Este projeto utiliza o Nginx em um container Docker para servir uma aplicação web estática, incluindo HTML, CSS, JavaScript e outros assets.

---

## 📸 Preview

![preview](./assets/img/preview.png)  
*Adicione aqui um screenshot ou GIF da aplicação em funcionamento.*

---

## 📁 Estrutura do Projeto

```
USANDO_CONTAINER_APPS/
├── dockerfile       # Arquivo Docker para criar a imagem
├── index.html       # Página principal da aplicação
├── assets/          # Diretório contendo os assets da aplicação
│   ├── css/         # Arquivos CSS
│   ├── js/          # Arquivos JavaScript
│   └── img/         # Imagens
```

---

## ✅ Pré-requisitos

- [Docker](https://www.docker.com/) instalado na máquina.

---

## ⚙️ Como Construir e Executar o Container

1. **Clone ou baixe este repositório.**

2. **Construa a imagem Docker:**
   ```bash
   docker build -t meu-nginx .
   ```

3. **Execute o container:**
   ```bash
   docker run -d -p 8080:80 meu-nginx
   ```

4. **Acesse a aplicação:**
   Abra o navegador e acesse:
   ```
   http://localhost:8080
   ```

---

## 🛠 Personalização

Para alterar o conteúdo da aplicação, edite o `index.html` e os arquivos dentro da pasta `assets/`.

Após qualquer alteração, reconstrua a imagem com:
```bash
docker build -t meu-nginx .
```

---

## 📄 Estrutura do Dockerfile

```dockerfile
FROM nginx:alpine

# Copia todos os arquivos e pastas para o diretório padrão do Nginx
COPY . /usr/share/nginx/html
```

---

## 🙌 Contribuindo

Pull requests são bem-vindos!  
Para mudanças maiores, por favor, abra uma issue para discutir o que você gostaria de alterar.

---

## 📝 Licença

Este projeto está licenciado sob a licença MIT.  
Sinta-se à vontade para usar, modificar e distribuir.

---

Desenvolvido usando Docker e Nginx.
