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

declare const spark: {
  kv: {
    get: <T>(key: string) => Promise<T | undefined>;
    set: <T>(key: string, value: T) => Promise<void>;
  };
};

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.service) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    const newSubmission = {
      ...formData,
      id: Date.now(),
      date: new Date().toISOString(),
    };

    try {
      const existingSubmissions = await spark.kv.get("contact-submissions") || [];
      await spark.kv.set("contact-submissions", [...(existingSubmissions as any[]), newSubmission]);
      
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-primary">
              Grupo RaVal
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("software")}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                Software
              </button>
              <button
                onClick={() => scrollToSection("design")}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                Design & Social Media
              </button>
              <button
                onClick={() => scrollToSection("personalizacao")}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                Personalização
              </button>
              <button
                onClick={() => scrollToSection("sinalizacao")}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                Sinalização
              </button>
              <Button onClick={() => scrollToSection("contato")} size="sm">
                Contato
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              Soluções Completas para seu Negócio
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Grupo RaVal
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Transformamos ideias em realidade com tecnologia, design criativo e produtos personalizados de alta qualidade.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" onClick={() => scrollToSection("contato")} className="min-w-[200px]">
                Solicitar Orçamento
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("software")} className="min-w-[200px]">
                Conheça Nossos Serviços
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="software" className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Code size={32} weight="duotone" className="text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">RaVal Engenharia de Software</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Desenvolvemos soluções tecnológicas personalizadas para impulsionar seu negócio
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Sistemas Web</CardTitle>
                  <CardDescription>
                    Aplicações web robustas e escaláveis para gestão empresarial
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Aplicativos Mobile</CardTitle>
                  <CardDescription>
                    Apps nativos e multiplataforma para iOS e Android
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Integração de Sistemas</CardTitle>
                  <CardDescription>
                    Conectamos seus sistemas para maior eficiência operacional
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">API e Automação</CardTitle>
                  <CardDescription>
                    Automatize processos e integre serviços via APIs REST
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">E-commerce</CardTitle>
                  <CardDescription>
                    Lojas virtuais completas com gestão de produtos e pagamentos
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Consultoria Tech</CardTitle>
                  <CardDescription>
                    Orientação especializada para suas decisões tecnológicas
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="design" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                  <PaintBrush size={32} weight="duotone" className="text-accent" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                  <ShareNetwork size={32} weight="duotone" className="text-accent" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Web Designer & Social Media</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Criamos identidade visual marcante e gerenciamos sua presença digital
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 hover:border-accent/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <PaintBrush size={24} className="text-accent" />
                  </div>
                  <CardTitle className="text-xl">Design Gráfico</CardTitle>
                  <CardContent className="px-0 pt-2">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Criação de logotipos e identidade visual</li>
                      <li>• Materiais impressos e digitais</li>
                      <li>• Banners, flyers e cartazes</li>
                      <li>• Apresentações corporativas</li>
                    </ul>
                  </CardContent>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-accent/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <Code size={24} className="text-accent" />
                  </div>
                  <CardTitle className="text-xl">Web Design</CardTitle>
                  <CardContent className="px-0 pt-2">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Design de websites responsivos</li>
                      <li>• Landing pages otimizadas</li>
                      <li>• UI/UX design moderno</li>
                      <li>• Prototipagem e wireframes</li>
                    </ul>
                  </CardContent>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-accent/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <ShareNetwork size={24} className="text-accent" />
                  </div>
                  <CardTitle className="text-xl">Gestão de Redes Sociais</CardTitle>
                  <CardContent className="px-0 pt-2">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Criação de conteúdo estratégico</li>
                      <li>• Agendamento de posts</li>
                      <li>• Gestão de Instagram, Facebook, LinkedIn</li>
                      <li>• Relatórios de performance</li>
                    </ul>
                  </CardContent>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-accent/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <PaintBrush size={24} className="text-accent" />
                  </div>
                  <CardTitle className="text-xl">Marketing Digital</CardTitle>
                  <CardContent className="px-0 pt-2">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Estratégias de conteúdo</li>
                      <li>• Campanhas de anúncios</li>
                      <li>• Branding digital</li>
                      <li>• Análise de métricas</li>
                    </ul>
                  </CardContent>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="personalizacao" className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <TShirt size={32} weight="duotone" className="text-primary" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Coffee size={32} weight="duotone" className="text-primary" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Personalização e Sublimação</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Produtos personalizados com qualidade profissional para sua empresa ou evento
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <TShirt size={24} className="text-primary" />
                  </div>
                  <CardTitle>Uniformes</CardTitle>
                  <CardDescription>
                    Camisetas, polos e uniformes profissionais personalizados
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Coffee size={24} className="text-primary" />
                  </div>
                  <CardTitle>Copos e Canecas</CardTitle>
                  <CardDescription>
                    Copos térmicos, canecas e xícaras personalizadas
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Tag size={24} className="text-primary" />
                  </div>
                  <CardTitle>Chaveiros</CardTitle>
                  <CardDescription>
                    Chaveiros personalizados em diversos materiais
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Coffee size={24} className="text-primary" />
                  </div>
                  <CardTitle>Pratos e Utensílios</CardTitle>
                  <CardDescription>
                    Pratos decorativos e utensílios personalizados
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <TShirt size={24} className="text-primary" />
                  </div>
                  <CardTitle>Brindes Corporativos</CardTitle>
                  <CardDescription>
                    Kits e brindes personalizados para eventos
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Coffee size={24} className="text-primary" />
                  </div>
                  <CardTitle>Sublimação Premium</CardTitle>
                  <CardDescription>
                    Impressão de alta qualidade em diversos materiais
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-accent/5 rounded-lg border border-accent/20">
              <p className="text-center text-sm text-muted-foreground">
                <strong className="text-foreground">Qualidade Garantida:</strong> Utilizamos tecnologia de sublimação profissional para garantir durabilidade e cores vibrantes em todos os produtos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="sinalizacao" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                  <Tag size={32} weight="duotone" className="text-accent" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                  <Signpost size={32} weight="duotone" className="text-accent" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Sinalização e Produtos em Acrílico</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Soluções modernas em acrílico com tecnologia QR Code e NFC para identificação e sinalização
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2 hover:border-accent/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <Tag size={24} className="text-accent" />
                  </div>
                  <CardTitle className="text-lg">Tags de Acrílico</CardTitle>
                  <CardDescription>
                    Identificadores em acrílico personalizados e duráveis
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-accent/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <IdentificationCard size={24} className="text-accent" />
                  </div>
                  <CardTitle className="text-lg">Placas com QR Code</CardTitle>
                  <CardDescription>
                    Placas de acrílico com QR Code personalizados
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-accent/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <IdentificationCard size={24} className="text-accent" />
                  </div>
                  <CardTitle className="text-lg">Cartões NFC</CardTitle>
                  <CardDescription>
                    Cartões de visita com QR Code e aproximação NFC
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-accent/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <Signpost size={24} className="text-accent" />
                  </div>
                  <CardTitle className="text-lg">Placas de Parede</CardTitle>
                  <CardDescription>
                    Placas fixas para sinalização: Entrada, Saída, etc
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Sinalização Corporativa</CardTitle>
                  <CardContent className="px-0 pt-4">
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>Placas de identificação de salas e setores</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>Sinalização de emergência (Saída, Entrada, Escada)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>Placas informativas personalizadas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>Identificadores de mesa e estação de trabalho</span>
                      </li>
                    </ul>
                  </CardContent>
                </CardHeader>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Tecnologia QR Code & NFC</CardTitle>
                  <CardContent className="px-0 pt-4">
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>Cartões de visita inteligentes com NFC</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>QR Codes personalizados para menu digital</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>Links diretos para redes sociais e contato</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>Compartilhamento de informações por aproximação</span>
                      </li>
                    </ul>
                  </CardContent>
                </CardHeader>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-center text-sm text-muted-foreground">
                <strong className="text-foreground">Personalização Total:</strong> Todos os produtos podem ser personalizados com sua logo, cores e informações específicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Envelope size={32} weight="duotone" className="text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
              <p className="text-lg text-muted-foreground">
                Solicite um orçamento sem compromisso ou tire suas dúvidas
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        placeholder="Seu nome completo"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        placeholder="(00) 00000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="service">Serviço de Interesse *</Label>
                      <Input
                        id="service"
                        placeholder="Ex: Desenvolvimento de Software"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      placeholder="Conte-nos mais sobre seu projeto ou dúvida..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Separator className="my-12" />

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Envelope size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">E-mail</h3>
                  <p className="text-sm text-muted-foreground">contato@gruporaval.com</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Telefone</h3>
                  <p className="text-sm text-muted-foreground">(00) 0000-0000</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Localização</h3>
                  <p className="text-sm text-muted-foreground">Atendemos todo Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Grupo RaVal</h3>
              <p className="text-background/70 max-w-2xl mx-auto">
                Soluções completas em tecnologia, design, personalização e sinalização. Transformando ideias em realidade.
              </p>
              <Separator className="bg-background/20" />
              <p className="text-sm text-background/60">
                © {new Date().getFullYear()} Grupo RaVal. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;