
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
## 📄 Comandos no powershell

```dockerfile
docker build -t blog-paralax-app:latest .
docker run -d -p 80:80 blog-paralax-app:latest

az login

# Create a resource group
az group create --name blog-paralax-app --location eastus

# Create an App Service plan
az provider register --namespace Microsoft.ContainerRegistry

# Create Container Registry
az acr create --resource-group blog-paralax-app --name blogparalaxacr --sku Basic

# Log in to the registry
az acr login --name blogparalaxacr

# tag the image
docker tag blog-paralax-app:latest blogparalaxacr.azurecr.io/blog-paralax-app:latest

# Push the image to the registry
docker push blogparalaxacr.azurecr.io/blog-paralax-app:latest

#registry provider
az provider register -n Microsoft.OperationalInsights --wait

#Create Environment container app
az containerapp env create --name blog-paralax-app-env --resource-group blog-paralax-app --location eastus

# Create the container app
az containerapp create --name [nome] --resource-group [group] --environment [.env] --image [image].azurecr.io/[container]:latest
--target-port 80 --ingress 'external' --registry-username [username] --registry-password [pwd] --registry-server [image].azurecr.io
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
