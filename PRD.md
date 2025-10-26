# Planning Guide

Site institucional profissional para o Grupo RaVal - uma empresa multisserviços que oferece soluções completas em tecnologia, design, personalização e sinalização.

**Experience Qualities**:
1. **Profissional** - O site deve transmitir credibilidade e confiança através de um design limpo e organizado
2. **Acessível** - Navegação intuitiva que permite aos clientes encontrar rapidamente o serviço desejado
3. **Moderno** - Visual contemporâneo que reflete inovação e qualidade dos serviços oferecidos

**Complexity Level**: Content Showcase (information-focused)
- O site é focado em apresentar os múltiplos serviços do grupo de forma clara e organizada, com seções dedicadas para cada área de atuação.

## Essential Features

**Seção Hero com Navegação**
- Functionality: Apresenta o Grupo RaVal e permite navegação rápida entre seções
- Purpose: Criar primeira impressão forte e facilitar acesso aos serviços
- Trigger: Carregamento da página
- Progression: Visualiza hero → Lê sobre o grupo → Clica em seção desejada → Rola suavemente até o serviço
- Success criteria: Usuário consegue identificar imediatamente os serviços e navegar facilmente

**Seção RaVal Engenharia de Software**
- Functionality: Apresenta serviços de desenvolvimento de software
- Purpose: Destacar expertise em soluções tecnológicas personalizadas
- Trigger: Scroll ou clique no menu
- Progression: Visualiza seção → Lê descrição dos serviços → Identifica soluções de interesse
- Success criteria: Cliente entende o escopo de serviços de software oferecidos

**Seção Web Designer e Social Media**
- Functionality: Exibe serviços de design digital e gestão de redes sociais
- Purpose: Mostrar capacidade de criar identidade visual e presença digital
- Trigger: Scroll ou clique no menu
- Progression: Visualiza seção → Entende serviços de design e social media → Identifica necessidades
- Success criteria: Cliente visualiza claramente os serviços criativos disponíveis

**Seção Personalização e Sublimação**
- Functionality: Apresenta produtos personalizados (uniformes, copos, xícaras, chaveiros, pratos)
- Purpose: Destacar variedade de produtos para brindes e uso corporativo
- Trigger: Scroll ou clique no menu
- Progression: Visualiza produtos → Lê sobre sublimação e personalização → Identifica produtos de interesse
- Success criteria: Cliente entende a variedade de produtos personalizáveis disponíveis

**Seção Sinalização e Acrílico**
- Functionality: Mostra produtos em acrílico (tags, placas com QR code, cartões de visita NFC, placas de parede)
- Purpose: Apresentar soluções modernas de identificação e sinalização
- Trigger: Scroll ou clique no menu
- Progression: Visualiza produtos → Entende aplicações (entrada, saída, etc) → Identifica necessidades
- Success criteria: Cliente visualiza aplicações práticas dos produtos de sinalização

**Seção de Contato**
- Functionality: Formulário e informações para contato
- Purpose: Facilitar solicitação de orçamentos e informações
- Trigger: Scroll até final ou clique no botão de contato
- Progression: Preenche nome e serviço de interesse → Submete formulário → Recebe confirmação
- Success criteria: Cliente consegue expressar interesse e enviar mensagem com sucesso

## Edge Case Handling
- **Seção vazia**: Cada seção tem conteúdo descritivo claro mesmo sem imagens específicas
- **Navegação mobile**: Menu adaptado com drawer/hamburguer para telas pequenas
- **Formulário incompleto**: Validação impede envio sem campos obrigatórios preenchidos
- **Scroll suave**: Navegação entre seções funciona tanto por scroll manual quanto por cliques no menu

## Design Direction
O design deve evocar profissionalismo e modernidade, com uma estética clean e corporativa que transmite confiança. A interface deve ser minimal mas rica em informação, facilitando a descoberta dos diversos serviços sem sobrecarregar visualmente.

## Color Selection
Complementary (opposite colors) - Usando azul profissional e laranja vibrante para criar contraste dinâmico que comunica tanto confiabilidade quanto criatividade.

- **Primary Color**: Azul profundo (oklch(0.45 0.15 250)) - Comunica confiança, profissionalismo e tecnologia
- **Secondary Colors**: Cinza claro neutro (oklch(0.96 0 0)) para backgrounds suaves e equilíbrio visual
- **Accent Color**: Laranja vibrante (oklch(0.68 0.18 45)) - Chama atenção para CTAs e elementos interativos importantes
- **Foreground/Background Pairings**:
  - Background (Branco Suave #FAFAFA): Texto escuro (oklch(0.2 0 0)) - Ratio 15.8:1 ✓
  - Card (Branco #FFFFFF): Texto escuro (oklch(0.2 0 0)) - Ratio 17.2:1 ✓
  - Primary (Azul Profundo oklch(0.45 0.15 250)): Texto branco (oklch(0.98 0 0)) - Ratio 7.2:1 ✓
  - Secondary (Cinza Claro oklch(0.96 0 0)): Texto escuro (oklch(0.2 0 0)) - Ratio 16.1:1 ✓
  - Accent (Laranja oklch(0.68 0.18 45)): Texto branco (oklch(0.98 0 0)) - Ratio 5.1:1 ✓
  - Muted (Cinza Médio oklch(0.94 0 0)): Texto médio (oklch(0.5 0 0)) - Ratio 6.8:1 ✓

## Font Selection
Utilizar Inter para uma tipografia moderna e altamente legível que funciona perfeitamente em interfaces digitais, transmitindo profissionalismo sem ser excessivamente formal.

- **Typographic Hierarchy**:
  - H1 (Grupo RaVal): Inter Bold/48px/tight letter-spacing/-1%
  - H2 (Títulos de Seção): Inter SemiBold/36px/normal letter-spacing
  - H3 (Subtítulos): Inter SemiBold/24px/normal letter-spacing
  - Body (Descrições): Inter Regular/16px/relaxed line-height/1.6
  - Small (Detalhes): Inter Regular/14px/normal line-height

## Animations
Animações sutis e funcionais que guiam o usuário através do conteúdo sem distrair da mensagem principal. Transições suaves entre seções e microinterações em botões para feedback tátil.

- **Purposeful Meaning**: Fade-in ao aparecer na viewport comunica profissionalismo, scroll suave entre seções cria experiência fluida
- **Hierarchy of Movement**: Hero com entrada sutil, seções de serviços com fade-in sequencial, botões com hover scale discreto (1.02x)

## Component Selection
- **Components**: 
  - Card para cada categoria de serviço com hover effects sutis
  - Button (Primary) para CTAs principais com variant customizado
  - Input e Textarea para formulário de contato
  - ScrollArea para navegação suave entre seções
  - Badge para destacar características especiais de serviços
  - Separator para dividir visualmente as seções
  
- **Customizations**: 
  - Hero section customizado com gradiente sutil
  - Navigation bar fixa com transparência adaptativa ao scroll
  - Grid layout responsivo para cards de serviços
  - Ícones do Phosphor para representar cada categoria de serviço
  
- **States**: 
  - Buttons: hover com scale sutil e brightness increase
  - Cards: hover com elevação (shadow) e border color change
  - Inputs: focus com ring azul primary e label animation
  - Links de navegação: underline animado no hover
  
- **Icon Selection**: 
  - Code para Engenharia de Software
  - PaintBrush para Web Designer
  - ShareNetwork para Social Media
  - TShirt para Uniformes
  - Coffee para produtos personalizados (copos, xícaras)
  - Tag para Tags de Acrílico
  - IdentificationCard para Cartões com QR Code
  - Signpost para Placas de Sinalização
  
- **Spacing**: Utilizando escala 4/8/16/24/32/48/64 do Tailwind para consistência
  
- **Mobile**: 
  - Hero com texto reduzido (32px) e padding ajustado
  - Navigation collapsible em drawer/sheet
  - Grid de serviços: 1 coluna em mobile, 2 em tablet, 3 em desktop
  - Formulário de contato em stack vertical completo em mobile
  - Ícones mantêm tamanho legível (32px mínimo)
