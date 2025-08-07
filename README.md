# Crystal OS - Landing Page

Landing page otimizada para o produto Crystal OS, um sistema operacional completo no Notion para agências digitais.

## 🚀 Performance Otimizada

- **CSS Crítico**: Carregamento prioritário dos estilos essenciais
- **Lazy Loading**: Imagens carregadas sob demanda
- **Service Worker**: Cache inteligente para melhor performance
- **Preload**: Recursos críticos pré-carregados
- **Debounce**: Event listeners otimizados

## 📁 Estrutura do Projeto

```
crystal-os/
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   ├── critical.css    # CSS crítico (carrega primeiro)
│   │   └── styles.css      # CSS não-crítico
│   ├── js/
│   │   └── main.js         # JavaScript otimizado
│   └── images/
│       └── placeholder.svg # Placeholder SVG
├── sw.js                   # Service Worker
└── .github/workflows/
    └── deploy.yml          # GitHub Actions
```

## 🛠️ Tecnologias

- **HTML5** - Estrutura semântica
- **Tailwind CSS** - Framework CSS utilitário
- **JavaScript Vanilla** - Sem dependências pesadas
- **Lucide Icons** - Ícones otimizados
- **Service Worker** - Cache e performance

## 🚀 Deploy no GitHub Pages

1. **Configure o repositório**:
   - Vá em Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

2. **Push para main**:
   ```bash
   git add .
   git commit -m "Deploy otimizado"
   git push origin main
   ```

3. **O GitHub Actions fará o deploy automaticamente**

## 📊 Métricas de Performance

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🎯 Otimizações Implementadas

### Performance
- ✅ CSS crítico separado
- ✅ Lazy loading de imagens
- ✅ Service Worker para cache
- ✅ Preload de recursos críticos
- ✅ Debounce em event listeners
- ✅ Intersection Observer otimizado

### SEO
- ✅ Meta tags completas
- ✅ Open Graph tags
- ✅ Structured Data (JSON-LD)
- ✅ URLs amigáveis
- ✅ Sitemap automático

### Acessibilidade
- ✅ Suporte a prefers-reduced-motion
- ✅ Suporte a prefers-contrast
- ✅ Navegação por teclado
- ✅ Alt text em imagens
- ✅ ARIA labels

## 🔧 Desenvolvimento Local

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/crystal-os.git

# Entre na pasta
cd crystal-os

# Abra com servidor local
python -m http.server 8000
# ou
npx serve .
```

## 📈 Próximas Melhorias

- [ ] Implementar analytics
- [ ] A/B testing
- [ ] PWA capabilities
- [ ] Compressão de imagens automática
- [ ] Minificação automática no build

## 📝 Licença

MIT License - veja o arquivo LICENSE para detalhes. 