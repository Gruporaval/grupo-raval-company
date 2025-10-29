import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  PaintBrush,
  ShareNetwork,
  TShirt,
  Coffee,
  Tag,
  IdentificationCard,
  Signpost,
  Envelope,
  Phone,
  MapPin,
} from "@phosphor-icons/react";
import { useState } from "react";
import { toast } from "sonner";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  mensagem: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    mensagem: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nome || !formData.email || !formData.mensagem) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Simulação de envio
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    
    // Limpar formulário
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      empresa: "",
      mensagem: "",
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-lg border-b border-border shadow-sm">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="text-2xl md:text-3xl font-bold text-primary">
              Grupo RaVal
            </div>

            <ul className="hidden md:flex items-center space-x-8">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("software")}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Software
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("design")}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("personalizacao")}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Personalização
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sinalizacao")}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Sinalização
                </button>
              </li>
              <li>
                <Button
                  onClick={() => scrollToSection("contato")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
                >
                  Contato
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section
          id="inicio"
          className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden relative"
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                  <Code size={40} weight="duotone" className="text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Soluções Completas para o Seu{" "}
                  <span className="text-primary">Negócio</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Desenvolvimento de software, design gráfico, personalização e sinalização.
                  Transformamos suas ideias em realidade com qualidade e inovação.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    onClick={() => scrollToSection("contato")}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 text-base"
                  >
                    Solicitar Orçamento
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => scrollToSection("software")}
                    className="border-primary text-primary hover:bg-primary/5 px-8 h-12 text-base"
                  >
                    Conhecer Serviços
                  </Button>
                </div>
              </div>

              <div className="lg:justify-self-end">
                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                  <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                    <Code size={32} weight="duotone" className="text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Software</h3>
                    <p className="text-sm text-muted-foreground">
                      Desenvolvimento personalizado
                    </p>
                  </Card>
                  <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                    <PaintBrush size={32} weight="duotone" className="text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Design</h3>
                    <p className="text-sm text-muted-foreground">
                      Identidade visual completa
                    </p>
                  </Card>
                  <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                    <TShirt size={32} weight="duotone" className="text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Personalização</h3>
                    <p className="text-sm text-muted-foreground">
                      Produtos únicos
                    </p>
                  </Card>
                  <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                    <Signpost size={32} weight="duotone" className="text-primary mb-3" />
                    <h3 className="font-semibold mb-2">Sinalização</h3>
                    <p className="text-sm text-muted-foreground">
                      Comunicação visual eficaz
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Software Section */}
        <section id="software" className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Code size={40} weight="duotone" className="text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Desenvolvimento de Software
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Criamos soluções tecnológicas sob medida para automatizar processos,
                aumentar a produtividade e impulsionar o crescimento do seu negócio.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20 bg-gradient-to-br from-background to-primary/5">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Code size={24} weight="duotone" className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">Sistemas Web</CardTitle>
                  <CardDescription className="text-base">
                    Aplicações web modernas e responsivas para gestão empresarial
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>ERPs e CRMs personalizados</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>E-commerce completo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Dashboards e relatórios</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Integração com APIs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20 bg-gradient-to-br from-background to-primary/5">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Code size={24} weight="duotone" className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">Apps Mobile</CardTitle>
                  <CardDescription className="text-base">
                    Aplicativos nativos para iOS e Android
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Interface intuitiva</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Performance otimizada</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Sincronização offline</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Push notifications</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20 bg-gradient-to-br from-background to-primary/5 md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Code size={24} weight="duotone" className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">Automação</CardTitle>
                  <CardDescription className="text-base">
                    Scripts e sistemas para automatizar tarefas repetitivas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>RPA e bots</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Integração de sistemas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Relatórios automáticos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Backup e monitoramento</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Design & Social Media Section */}
        <section id="design" className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <PaintBrush size={40} weight="duotone" className="text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Design & Social Media
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Criamos identidades visuais marcantes e gerenciamos sua presença digital
                para destacar sua marca no mercado competitivo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20 bg-gradient-to-br from-background to-primary/5">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <PaintBrush size={24} weight="duotone" className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Design Gráfico</CardTitle>
                  <CardDescription className="text-base">
                    Identidade visual completa para sua marca
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Logotipos e identidade visual</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Material impresso (cartões, flyers, catálogos)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Embalagens e rótulos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Apresentações corporativas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Manual da marca</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20 bg-gradient-to-br from-background to-primary/5">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <ShareNetwork size={24} weight="duotone" className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Social Media</CardTitle>
                  <CardDescription className="text-base">
                    Gestão completa da sua presença digital
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Criação de conteúdo visual</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Planejamento de posts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Gestão de campanhas publicitárias</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Relatórios de performance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Estratégia de engajamento</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Personalization Section */}
        <section id="personalizacao" className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <TShirt size={40} weight="duotone" className="text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Personalização de Produtos
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Personalizamos uma ampla variedade de produtos para promover sua marca,
                criar uniformes corporativos ou presentes únicos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20 bg-gradient-to-br from-background to-primary/5">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <TShirt size={24} weight="duotone" className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">Vestuário</CardTitle>
                  <CardDescription className="text-base">
                    Uniformes e roupas personalizadas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Camisetas e polos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Uniformes profissionais</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Bonés e chapéus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Aventais e jalecos</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20 bg-gradient-to-br from-background to-primary/5">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Coffee size={24} weight="duotone" className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">Brindes</CardTitle>
                  <CardDescription className="text-base">
                    Produtos promocionais personalizados
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Canecas e copos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Squeezes e garrafas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Chaveiros e brindes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Bolsas e mochilas</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20 bg-gradient-to-br from-background to-primary/5">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Tag size={24} weight="duotone" className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">Impressos</CardTitle>
                  <CardDescription className="text-base">
                    Material promocional impresso
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Adesivos e etiquetas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Banners e faixas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Cartões de visita</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Folders e panfletos</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20 bg-gradient-to-br from-background to-primary/5">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IdentificationCard size={24} weight="duotone" className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">Corporativo</CardTitle>
                  <CardDescription className="text-base">
                    Itens para escritório e eventos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Placas e totens</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Troféus e medalhas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Canetas e cadernos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Material de escritório</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Signage Section */}
        <section id="sinalizacao" className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Signpost size={40} weight="duotone" className="text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Sinalização
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Comunicação visual eficiente para orientar, informar e promover.
                Desde projetos simples até sistemas complexos de sinalização.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                <div className="grid gap-6">
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20 bg-gradient-to-br from-background to-primary/5">
                    <CardHeader>
                      <CardTitle className="text-xl">Sinalização Interna</CardTitle>
                      <CardDescription>
                        Orientação e comunicação dentro do ambiente
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-3">
                          <span className="text-primary font-bold">✓</span>
                          <span>Placas direcionais e informativas</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary font-bold">✓</span>
                          <span>Identificação de salas e setores</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary font-bold">✓</span>
                          <span>Sinalização de segurança</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20 bg-gradient-to-br from-background to-primary/5">
                    <CardHeader>
                      <CardTitle className="text-xl">Sinalização Externa</CardTitle>
                      <CardDescription>
                        Comunicação visual para área externa
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-3">
                          <span className="text-primary font-bold">✓</span>
                          <span>Letreiros e fachadas</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary font-bold">✓</span>
                          <span>Totens e outdoors</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary font-bold">✓</span>
                          <span>Placas de identificação</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
                  <h3 className="text-2xl font-bold mb-6">Nosso Processo</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">1</span>
                      <div>
                        <strong>Análise do local:</strong> Avaliação das necessidades específicas
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">2</span>
                      <div>
                        <strong>Projeto personalizado:</strong> Desenvolvimento da solução ideal
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">3</span>
                      <div>
                        <strong>Produção de qualidade:</strong> Materiais duráveis e resistentes
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">4</span>
                      <div>
                        <strong>Instalação profissional:</strong> Garantia de 2 anos
                      </div>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                  <Envelope size={40} weight="duotone" className="text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Entre em Contato</h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Solicite um orçamento sem compromisso ou tire suas dúvidas. Nossa equipe está pronta para transformar suas ideias em realidade.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                <div className="lg:col-span-2">
                  <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
                    <CardHeader>
                      <CardTitle className="text-2xl mb-2">Formulário de Contato</CardTitle>
                      <CardDescription className="text-base">
                        Preencha o formulário abaixo e entraremos em contato em até 24 horas
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="nome">Nome *</Label>
                            <Input
                              id="nome"
                              name="nome"
                              value={formData.nome}
                              onChange={handleInputChange}
                              placeholder="Seu nome completo"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="seu@email.com"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="telefone">Telefone</Label>
                            <Input
                              id="telefone"
                              name="telefone"
                              value={formData.telefone}
                              onChange={handleInputChange}
                              placeholder="(00) 00000-0000"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="empresa">Empresa</Label>
                            <Input
                              id="empresa"
                              name="empresa"
                              value={formData.empresa}
                              onChange={handleInputChange}
                              placeholder="Nome da sua empresa"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="mensagem">Mensagem *</Label>
                          <Textarea
                            id="mensagem"
                            name="mensagem"
                            value={formData.mensagem}
                            onChange={handleInputChange}
                            placeholder="Descreva seu projeto ou necessidade..."
                            className="min-h-32"
                            required
                          />
                        </div>

                        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          Enviar Mensagem
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card className="p-6 border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone size={24} weight="duotone" className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Telefone</h3>
                        <p className="text-muted-foreground">(11) 99999-9999</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Segunda a sexta, 8h às 18h
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Envelope size={24} weight="duotone" className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Email</h3>
                        <p className="text-muted-foreground">contato@gruporaval.com.br</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Resposta em até 24h
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin size={24} weight="duotone" className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Localização</h3>
                        <p className="text-muted-foreground">São Paulo, SP</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Atendemos todo o Brasil
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <div className="text-center">
                <div className="flex flex-wrap justify-center gap-4">
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    Orçamento Gratuito
                  </Badge>
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    Entrega Rápida
                  </Badge>
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    Suporte Técnico
                  </Badge>
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    Garantia de Qualidade
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-primary mb-4">Grupo RaVal</div>
              <p className="text-muted-foreground mb-4">
                Transformando ideias em soluções digitais e visuais de qualidade.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection("software")}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Desenvolvimento de Software
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("design")}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Design & Social Media
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("personalizacao")}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Personalização
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("sinalizacao")}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Sinalização
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>(11) 99999-9999</li>
                <li>contato@gruporaval.com.br</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Horário de Atendimento</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Segunda a Sexta: 8h às 18h</li>
                <li>Sábado: 8h às 12h</li>
                <li>Domingo: Fechado</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Grupo RaVal. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;