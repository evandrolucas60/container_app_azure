FROM nginx:alpine

# Copia todos os arquivos e pastas para o diretório padrão do Nginx
COPY Blog/html /usr/share/nginx/html

EXPOSE 80