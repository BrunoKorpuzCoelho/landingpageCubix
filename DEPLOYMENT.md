# CUBIX Landing Page - Deployment Guide

## 📋 Pré-requisitos na VPS

- Node.js 20.x ou superior
- npm ou pnpm
- Git

## 🚀 Deployment na VPS

### 1. Clone o Repositório

```bash
git clone https://github.com/BrunoKorpuzCoelho/landingpageCubix.git
cd landingpageCubix
```

### 2. Instale as Dependências

Escolha um dos seguintes comandos:

```bash
# Se usar npm
npm install

# Se usar pnpm (recomendado - mais rápido)
pnpm install
```

### 3. Configure as Variáveis de Ambiente

Crie um ficheiro `.env.local` na raiz do projeto:

```bash
nano .env.local
```

Adicione a seguinte variável:

```
RESEND_API_KEY=re_4r1UuW2m_Pz8Pi2DQp7vPhS93EWH6TQpu
```

### 4. Build do Projeto

```bash
# Se usar npm
npm run build

# Se usar pnpm
pnpm build
```

### 5. Inicie o Servidor de Produção

```bash
# Se usar npm
npm start

# Se usar pnpm
pnpm start
```

O website estará disponível em `http://localhost:3000`

## 🔧 Configurar como Serviço (PM2)

Para manter o website sempre ativo, use PM2:

### Instalar PM2

```bash
npm install -g pm2
```

### Iniciar o Serviço

```bash
pm2 start npm --name "cubix-landing" -- start
```

### Configurar para Iniciar Automaticamente

```bash
pm2 startup
pm2 save
```

### Comandos Úteis do PM2

```bash
# Ver status
pm2 status

# Ver logs
pm2 logs cubix-landing

# Reiniciar
pm2 restart cubix-landing

# Parar
pm2 stop cubix-landing

# Remover
pm2 delete cubix-landing
```

## 🌐 Configurar Nginx (Reverse Proxy)

Se quiser usar um domínio (ex: cubix.com), configure o Nginx:

### Instalar Nginx

```bash
sudo apt update
sudo apt install nginx
```

### Criar Configuração

```bash
sudo nano /etc/nginx/sites-available/cubix
```

Adicione:

```nginx
server {
    listen 80;
    server_name seu-dominio.com www.seu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Ativar o Site

```bash
sudo ln -s /etc/nginx/sites-available/cubix /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## 🔒 SSL/HTTPS com Certbot

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d seu-dominio.com -d www.seu-dominio.com
```

## 🔄 Atualizar o Website

Para atualizar o website com novas alterações:

```bash
cd landingpageCubix
git pull origin main
npm install  # ou pnpm install
npm run build  # ou pnpm build
pm2 restart cubix-landing
```

## 📊 Portas

- **Aplicação Next.js:** 3000 (padrão)
- **Nginx:** 80 (HTTP) / 443 (HTTPS)

## 📝 Notas

- O ficheiro `.env.local` **NÃO** está no Git (está no .gitignore)
- Certifique-se de criar o `.env.local` na VPS após clonar
- As dependências (`node_modules`) também não estão no Git
- O build (`.next/`) é gerado durante o deployment

## 🐛 Troubleshooting

### Erro de Permissões

```bash
sudo chown -R $USER:$USER /home/korpuz/Documents/GitHub/landingpageCubix
```

### Porta 3000 já em uso

```bash
# Ver processo usando a porta
lsof -i :3000

# Matar processo
kill -9 <PID>
```

### Logs do Next.js

```bash
pm2 logs cubix-landing --lines 100
```
