# Site da ÁgilMed Ocupacional

Site institucional em Next.js (App Router), mesma stack do site da Real Life SSMA, pronto para
publicar na Vercel.

## Como rodar na sua máquina

```bash
npm install
npm run dev      # http://localhost:3000
```

Para conferir o build de produção:

```bash
npm run build
npm start
```

## Como publicar na Vercel

1. Suba esta pasta para um repositório no GitHub (ou GitLab/Bitbucket).
2. Em vercel.com → **Add New… → Project** → importe esse repositório.
3. A Vercel detecta Next.js sozinha. Não precisa mudar nenhuma configuração de build.
4. Em **Settings → Environment Variables**, cadastre as três variáveis abaixo (opcional no
   primeiro deploy — sem elas o site funciona e os formulários caem no log).
5. **Deploy**. A Vercel devolve uma URL de teste (`...vercel.app`) para você conferir antes de
   apontar o domínio.
6. Em **Settings → Domains**, adicione `agilmedocupacional.com.br` e `www.agilmedocupacional.com.br`
   e siga as instruções de DNS que a Vercel mostrar. O domínio só troca de site quando o DNS
   apontar para lá — até esse momento o site atual continua no ar.

## Variáveis de ambiente

| Variável | Para que serve |
|---|---|
| `RESEND_API_KEY` | Chave do serviço de e-mail (resend.com) usada para enviar os formulários. |
| `EMAIL_REMETENTE` | Remetente verificado no domínio, ex.: `site@agilmedocupacional.com.br`. |
| `EMAIL_DESTINO` | Caixa que recebe os contatos. Sem essa variável, vai para `contato@agilmedocupacional.com.br`. |

Sem `RESEND_API_KEY` e `EMAIL_REMETENTE`, o formulário responde normalmente ao visitante e o
conteúdo do contato fica registrado nos logs da Vercel — nada se perde, mas ninguém é avisado por
e-mail. Configure antes de divulgar o site.

## O que precisa ser preenchido antes de ir ao ar

Estes campos estão marcados entre colchetes no código:

- `lib/site.js` → `responsavelTecnico`: nome e CRM do médico do trabalho que assina os conteúdos
  clínicos. Aparece no rodapé de todas as páginas e na assinatura dos artigos do blog.

## Estrutura

```
app/
  page.js                       Home
  [servicoLocal]/page.js        Páginas de exame (URLs de busca local)
  exames/page.js                Hub de exames
  programas-e-laudos/           PCMSO, eSocial SST, gestão de afastados
  riscos-psicossociais-nr1/     Landing da oferta conjunta com a Real Life
  para-empresas/                Gestão de SST e pedido de proposta
  boletim/                      Boletim de Antecedência (captação por CNPJ)
  blog/ e blog/[post]/          Blog e artigos
  sobre/ contato/ agendamento/  Institucional
  api/lead/route.js             Recebe os formulários
  sitemap.js  robots.js         Gerados automaticamente
lib/
  site.js        Dados da empresa, navegação e JSON-LD
  exames.js      Conteúdo das páginas de exame
  programas.js   Conteúdo dos programas
  posts.js       Artigos do blog
components/      Cabeçalho, rodapé, formulário e blocos reaproveitados
```

## Como publicar um artigo novo

Cada artigo é um objeto em `lib/posts.js`. Copie o que já existe, troque `slug`, `titulo`,
`descricao`, `data` e os blocos de `corpo` (`p`, `h2`, `destaque`, `lista`, `lista-numerada`).
O sitemap e a listagem do blog se atualizam sozinhos.

## Como adicionar uma página de exame

Cada exame é um objeto em `lib/exames.js`. A URL sai automática no formato
`/exame-<slug>-porto-velho`.

## Decisões que valem saber

- **URLs de busca local.** As páginas de exame ficam em `/exame-admissional-porto-velho` em vez de
  `/exames/admissional`, e não existe versão genérica das mesmas páginas — duas páginas disputando
  o mesmo termo derrubam as duas.
- **Divisão com a Real Life SSMA.** PGR, LTCAT, laudos e treinamentos de NR são conteúdo do site da
  Real Life; aqui eles aparecem como referência com link. Isso evita que os dois sites do grupo
  briguem pelas mesmas palavras-chave em Porto Velho.
- **Sem promessa de resultado.** O texto do site promete conduta (aviso antes do vencimento, ASO no
  mesmo dia), nunca resultado ("zero multa", "100% de conformidade"), por ser conteúdo de saúde e
  segurança sujeito a fiscalização.
- **Indicadores do portfólio 2026** (98% de conformidade, −32% de afastamentos, +25% de
  produtividade) estão marcados como ilustrativos no material original e por isso **não** foram
  usados no site.
