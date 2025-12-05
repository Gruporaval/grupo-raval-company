import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import videoCard from "@/assets/videos/videocard.mp4";
import videoPlayback from "@/assets/videos/videoplayback.mp4";
import { useEffect, useState } from "react";
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
  MagnifyingGlass,
  FileText,
  Storefront,
  ShoppingCart,
} from "@phosphor-icons/react";
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

  // Efeito para animação sequencial dos cards
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === 'software-cards') {
          // Animar cards sequencialmente com delays maiores
          setTimeout(() => {
            const card1 = document.getElementById('card-1');
            if (card1) {
              card1.classList.remove('card-hidden');
              card1.classList.add('card-animate-1');
            }
          }, 300);

          setTimeout(() => {
            const card2 = document.getElementById('card-2');
            if (card2) {
              card2.classList.remove('card-hidden');
              card2.classList.add('card-animate-2');
            }
          }, 1500); // Aumentado de 500 para 1500

          setTimeout(() => {
            const card3 = document.getElementById('card-3');
            if (card3) {
              card3.classList.remove('card-hidden');
              card3.classList.add('card-animate-3');
            }
          }, 2700); // Aumentado de 900 para 2700

          // Para de observar após a primeira animação
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observar a seção de software
    const softwareSection = document.getElementById('software-cards');
    if (softwareSection) {
      observer.observe(softwareSection);
    }

    return () => observer.disconnect();
  }, []);

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
    <div className="min-h-screen bg-background transition-colors duration-300">
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/50 shadow-lg transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-pulse">
              Grupo RaVal
            </div>

            <div className="flex items-center gap-4">
              <ul className="hidden md:flex items-center space-x-2">
                <li>
                  <button
                    onClick={() => scrollToSection("inicio")}
                    className="relative group bg-primary/10 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium px-5 py-2 rounded-lg overflow-hidden"
                  >
                    <span className="relative z-10">Início</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("software")}
                    className="relative group bg-primary/10 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium px-5 py-2 rounded-lg overflow-hidden"
                  >
                    <span className="relative z-10">Software</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("design")}
                    className="relative group bg-primary/10 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium px-5 py-2 rounded-lg overflow-hidden"
                  >
                    <span className="relative z-10">Design</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("personalizacao")}
                    className="relative group bg-primary/10 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium px-5 py-2 rounded-lg overflow-hidden"
                  >
                    <span className="relative z-10">Produtos</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("sinalizacao")}
                    className="relative group bg-primary/10 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium px-5 py-2 rounded-lg overflow-hidden"
                  >
                    <span className="relative z-10">Sinalização</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </li>
                <li>
                  <Button
                    onClick={() => scrollToSection("contato")}
                    className="relative group bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent text-primary-foreground px-5 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Contato
                  </Button>
                </li>
              </ul>

              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section
          id="inicio"
          className="relative py-16 md:py-20 lg:py-24 overflow-hidden"
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 dark:from-primary/10 dark:via-background dark:to-accent/10" />

          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl animate-pulse delay-500" />

          <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="text-center lg:text-left space-y-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                  <Code size={40} weight="duotone" className="text-primary dark:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Soluções Completas para o Seu{" "}
                  <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-pulse">
                    Negócio
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Desenvolvimento de software, design gráfico, personalização e sinalização.
                  Transformamos suas ideias em realidade com qualidade e inovação.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    onClick={() => scrollToSection("contato")}
                    className="group relative animate-gradient-flow bg-gradient-to-r from-primary via-accent via-secondary to-primary text-primary-foreground px-8 h-12 text-base shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 overflow-hidden border-2 border-primary/20 hover:border-accent/60"
                  >
                    <span className="relative z-10 flex items-center gap-2 font-semibold">
                      Solicitar Orçamento
                      <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </span>
                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-gradient-shimmer" />
                  </Button>
                </div>
              </div>

              <div className="lg:justify-self-end">
                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                  <Card className="group p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 bg-gradient-to-br from-card to-primary/5 dark:from-card dark:to-primary/10 border-2 border-primary/20 hover:border-primary/30 backdrop-blur-sm animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-3 group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-500">
                      <Code size={32} weight="duotone" className="text-primary dark:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                    </div>
                    <h3 className="font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">Software</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      Desenvolvimento personalizado
                    </p>
                  </Card>
                  <Card className="group p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 bg-gradient-to-br from-card to-accent/5 dark:from-card dark:to-accent/10 border-2 border-accent/20 hover:border-accent/30 backdrop-blur-sm animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-3 group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-500">
                      <PaintBrush size={32} weight="duotone" className="text-accent dark:drop-shadow-[0_0_8px_rgba(251,146,60,0.6)]" />
                    </div>
                    <h3 className="font-semibold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">Design</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      Identidade visual completa
                    </p>
                  </Card>
                  <Card className="group p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 bg-gradient-to-br from-card to-secondary/5 dark:from-card dark:to-secondary/10 border-2 border-secondary/20 hover:border-secondary/30 backdrop-blur-sm animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-3 group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-500">
                      <TShirt size={32} weight="duotone" className="text-secondary dark:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                    </div>
                    <h3 className="font-semibold mb-2 text-foreground group-hover:text-secondary transition-colors duration-300">Personalização</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      Produtos únicos
                    </p>
                  </Card>
                  <Card className="group p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 bg-gradient-to-br from-card to-primary/5 dark:from-card dark:to-primary/10 border-2 border-primary/20 hover:border-primary/30 backdrop-blur-sm animate-fade-in opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-3 group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-500">
                      <Signpost size={32} weight="duotone" className="text-accent dark:drop-shadow-[0_0_8px_rgba(251,146,60,0.6)]" />
                    </div>
                    <h3 className="font-semibold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">Acrílico</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      Placas qr code e Cartões de visita
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

            <div id="software-cards" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
              <Card id="card-1" className="card-hidden group bg-gradient-to-br from-accent via-primary to-black transform-gpu hover:rotateX-12 hover:rotateY-12 shadow-2xl hover:shadow-4xl" style={{ transformStyle: 'preserve-3d', boxShadow: '0 20px 40px rgba(0,0,0,0.3), 0 0 20px rgba(59, 130, 246, 0.5)' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/20 to-black/20 rounded-lg" style={{ transform: 'translateZ(-10px)' }}></div>
                <CardHeader className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:rotateY-180 transition-transform duration-700 shadow-lg">
                    <Code size={24} weight="duotone" className="text-white drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-xl text-white drop-shadow-lg font-bold tracking-wide">Sistemas Web</CardTitle>
                  <CardDescription className="text-base text-white/90 drop-shadow-md">
                    Aplicações web modernas e responsivas para gestão empresarial
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 transform group-hover:translateZ-10 transition-transform duration-500">
                  <ul className="space-y-3 text-sm text-white">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span>ERPs e CRMs personalizados</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span>E-commerce completo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span>Dashboards e relatórios</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span>Integração com APIs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card id="card-2" className="card-hidden group bg-gradient-to-br from-green-600 via-black to-primary transform-gpu hover:rotateX--12 hover:rotateY--12 shadow-2xl hover:shadow-4xl" style={{ transformStyle: 'preserve-3d', boxShadow: '0 20px 40px rgba(0,0,0,0.3), 0 0 20px rgba(34, 197, 94, 0.5)' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-black/20 to-primary/20 rounded-lg" style={{ transform: 'translateZ(-10px)' }}></div>
                <CardHeader className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:rotateX-180 transition-transform duration-700 shadow-lg">
                    <Code size={24} weight="duotone" className="text-white drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-xl text-white drop-shadow-lg font-bold tracking-wide">Apps Mobile</CardTitle>
                  <CardDescription className="text-base text-white/90 drop-shadow-md">
                    Aplicativos nativos para iOS e Android
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 transform group-hover:translateZ-10 transition-transform duration-500">
                  <ul className="space-y-3 text-sm text-white">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 font-bold">✓</span>
                      <span>Interface intuitiva</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 font-bold">✓</span>
                      <span>Performance otimizada</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 font-bold">✓</span>
                      <span>Sincronização offline</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 font-bold">✓</span>
                      <span>Push notifications</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card id="card-3" className="card-hidden group bg-gradient-to-br from-primary via-accent to-green-600 md:col-span-2 lg:col-span-1 transform-gpu hover:rotateY-15 hover:rotateX-8 shadow-2xl hover:shadow-4xl" style={{ transformStyle: 'preserve-3d', boxShadow: '0 25px 50px rgba(0,0,0,0.4), 0 0 30px rgba(249, 115, 22, 0.6)' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-green-600/20 rounded-lg" style={{ transform: 'translateZ(-15px)' }}></div>
                <CardHeader className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:rotateZ-360 transition-transform duration-1000 shadow-xl">
                    <Code size={24} weight="duotone" className="text-white drop-shadow-xl" />
                  </div>
                  <CardTitle className="text-xl text-white drop-shadow-lg font-bold tracking-wide">Automação</CardTitle>
                  <CardDescription className="text-base text-white/90 drop-shadow-md">
                    Scripts e sistemas para automatizar tarefas repetitivas
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 transform group-hover:translateZ-15 transition-transform duration-500">
                  <ul className="space-y-3 text-sm text-white group-hover:text-black transition-colors duration-300">
                    <li className="flex items-start gap-3">
                      <span className="text-black font-bold group-hover:text-white transition-colors duration-300">✓</span>
                      <span>RPA e bots</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-black font-bold group-hover:text-white transition-colors duration-300">✓</span>
                      <span>Integração de sistemas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-black font-bold group-hover:text-white transition-colors duration-300">✓</span>
                      <span>Relatórios automáticos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-black font-bold group-hover:text-white transition-colors duration-300">✓</span>
                      <span>Backup e monitoramento</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Nossos Projetos Section */}
        <section id="projetos" className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6">
                <Code size={40} weight="duotone" className="text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Nossos Projetos
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Conheça alguns dos projetos inovadores que desenvolvemos para facilitar o dia a dia de Guaíra - SP
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Busca CEP */}
              <a href="https://buscacep.gruporaval.com" target="_blank" rel="noopener noreferrer" className="block">
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 border-2 border-border hover:border-primary/40 bg-gradient-to-br from-card via-card to-primary/5 overflow-hidden relative cursor-pointer h-full">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500" />
                  <CardHeader className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                      <MagnifyingGlass size={32} weight="duotone" className="text-primary drop-shadow-lg" />
                    </div>
                    <CardTitle className="text-xl font-bold">Busca CEP</CardTitle>
                    <CardDescription className="text-sm">
                      Sistema de busca de CEPs
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-sm text-muted-foreground mb-4">
                      Ferramenta para buscar CEPs de Guaíra - SP de forma rápida e eficiente.
                    </p>
                    <div className="pt-4 border-t border-border">
                      <span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">
                        <MapPin size={14} weight="duotone" />
                        Guaíra - SP
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </a>

              {/* Gerador de Currículos */}
              <a href="https://curriculo.gruporaval.com" target="_blank" rel="noopener noreferrer" className="block">
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 border-2 border-border hover:border-secondary/40 bg-gradient-to-br from-card via-card to-secondary/5 overflow-hidden relative cursor-pointer h-full">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-all duration-500" />
                  <CardHeader className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                      <FileText size={32} weight="duotone" className="text-secondary drop-shadow-lg" />
                    </div>
                    <CardTitle className="text-xl font-bold">Gerador de Currículos</CardTitle>
                    <CardDescription className="text-sm">
                      Crie currículos profissionais
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-sm text-muted-foreground mb-4">
                      Plataforma gratuita para criar currículos profissionais de forma rápida e intuitiva.
                    </p>
                    <div className="pt-4 border-t border-border">
                      <span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-secondary/10 text-secondary font-medium">
                        <FileText size={14} weight="duotone" />
                        100% Gratuito
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </a>

              {/* Aqui Guaíra */}
              <a href="https://aquiguaira.gruporaval.com" target="_blank" rel="noopener noreferrer" className="block">
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 border-2 border-border hover:border-accent/40 bg-gradient-to-br from-card via-card to-accent/5 overflow-hidden relative cursor-pointer h-full">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all duration-500" />
                  <CardHeader className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                      <Storefront size={32} weight="duotone" className="text-accent drop-shadow-lg" />
                    </div>
                    <CardTitle className="text-xl font-bold">Aqui Guaíra</CardTitle>
                    <CardDescription className="text-sm">
                      Encontre lojas locais
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-sm text-muted-foreground mb-4">
                      Plataforma para buscar lojas e estabelecimentos de Guaíra por região.
                    </p>
                    <div className="pt-4 border-t border-border">
                      <span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-accent/10 text-accent font-medium">
                        <Storefront size={14} weight="duotone" />
                        Comércio Local
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </a>

              {/* MarketGauira */}
              <a href="https://marketgauira.gruporaval.com" target="_blank" rel="noopener noreferrer" className="block">
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 border-2 border-border hover:border-primary/40 bg-gradient-to-br from-card via-card to-primary/5 overflow-hidden relative cursor-pointer h-full">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500" />
                  <CardHeader className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                      <ShoppingCart size={32} weight="duotone" className="text-primary drop-shadow-lg" />
                    </div>
                    <CardTitle className="text-xl font-bold">MarketGauira</CardTitle>
                    <CardDescription className="text-sm">
                      Marketplace local
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-sm text-muted-foreground mb-4">
                      Marketplace exclusivo para conectar compradores e vendedores de Guaíra.
                    </p>
                    <div className="pt-4 border-t border-border">
                      <span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">
                        <ShoppingCart size={14} weight="duotone" />
                        E-commerce
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </a>
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
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 border-2 hover:border-primary/30 bg-gradient-to-br from-background to-primary/5 relative overflow-hidden transform hover:scale-105">
                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-50 transition-opacity duration-500"
                  >
                    <source src={videoCard} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/70" />
                </div>
                <CardHeader className="relative z-10 transform group-hover:translate-x-2 transition-transform duration-500">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/30 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                    <PaintBrush size={24} weight="duotone" className="text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">Design Gráfico</CardTitle>
                  <CardDescription className="text-base">
                    Identidade visual completa para sua marca
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Logotipos e identidade visual</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Material impresso (cartões de visitas, flyers, catálogos)</span>
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

              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 border-2 hover:border-primary/30 bg-gradient-to-br from-background to-primary/5 relative overflow-hidden transform hover:scale-105">
                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-50 transition-opacity duration-500"
                  >
                    <source src={videoPlayback} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/70" />
                </div>
                <CardHeader className="relative z-10 transform group-hover:translate-x-2 transition-transform duration-500">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/30 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                    <ShareNetwork size={24} weight="duotone" className="text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">Social Media</CardTitle>
                  <CardDescription className="text-base">
                    Gestão completa da sua presença digital
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Card Vestuário */}
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 border-2 border-border hover:border-primary/40 bg-gradient-to-br from-card via-card to-primary/5 h-full flex flex-col overflow-hidden relative">
                {/* Background decorativo */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500" />

                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <TShirt size={32} weight="duotone" className="text-primary drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text">Vestuário</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    Uniformes e roupas personalizadas
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow space-y-6 relative z-10">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 group/item">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary group-hover/item:scale-150 transition-transform" />
                      <span className="text-sm text-foreground/90 group-hover/item:text-primary group-hover/item:translate-x-1 transition-all">Camisetas e polos</span>
                    </li>
                    <li className="flex items-center gap-3 group/item">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary group-hover/item:scale-150 transition-transform" />
                      <span className="text-sm text-foreground/90 group-hover/item:text-primary group-hover/item:translate-x-1 transition-all">Camisas e bermudas</span>
                    </li>
                    <li className="flex items-center gap-3 group/item">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary group-hover/item:scale-150 transition-transform" />
                      <span className="text-sm text-foreground/90 group-hover/item:text-primary group-hover/item:translate-x-1 transition-all">Uniformes profissionais</span>
                    </li>
                    <li className="flex items-center gap-3 group/item">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary group-hover/item:scale-150 transition-transform" />
                      <span className="text-sm text-foreground/90 group-hover/item:text-primary group-hover/item:translate-x-1 transition-all">Bonés e chapéus</span>
                    </li>
                    <li className="flex items-center gap-3 group/item">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary group-hover/item:scale-150 transition-transform" />
                      <span className="text-sm text-foreground/90 group-hover/item:text-primary group-hover/item:translate-x-1 transition-all">Aventais e jalecos</span>
                    </li>
                  </ul>

                  {/* Carrossel Melhorado */}
                  <div className="relative h-40 rounded-xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
                    <div className="flex animate-slide-infinite h-full">
                      <img src="https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=300&fit=crop" alt="Camisetas personalizadas" className="w-full h-full object-cover flex-shrink-0 filter brightness-90 group-hover:brightness-100 transition-all" />
                      <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop" alt="Uniformes profissionais" className="w-full h-full object-cover flex-shrink-0 filter brightness-90 group-hover:brightness-100 transition-all" />
                      <img src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop" alt="Bonés personalizados" className="w-full h-full object-cover flex-shrink-0 filter brightness-90 group-hover:brightness-100 transition-all" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card Brindes */}
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 border-2 border-border hover:border-secondary/40 bg-gradient-to-br from-card via-card to-secondary/5 h-full flex flex-col overflow-hidden relative">
                {/* Background decorativo */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-all duration-500" />

                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <Coffee size={32} weight="duotone" className="text-secondary drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-foreground to-secondary bg-clip-text">Brindes</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    Produtos promocionais personalizados
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow space-y-6 relative z-10">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 group/item">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary group-hover/item:scale-150 transition-transform" />
                      <span className="text-sm text-foreground/90 group-hover/item:text-secondary group-hover/item:translate-x-1 transition-all">Canecas e copos</span>
                    </li>
                    <li className="flex items-center gap-3 group/item">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary group-hover/item:scale-150 transition-transform" />
                      <span className="text-sm text-foreground/90 group-hover/item:text-secondary group-hover/item:translate-x-1 transition-all">Squeezes e garrafas</span>
                    </li>
                    <li className="flex items-center gap-3 group/item">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary group-hover/item:scale-150 transition-transform" />
                      <span className="text-sm text-foreground/90 group-hover/item:text-secondary group-hover/item:translate-x-1 transition-all">Chaveiros e brindes</span>
                    </li>
                    <li className="flex items-center gap-3 group/item">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary group-hover/item:scale-150 transition-transform" />
                      <span className="text-sm text-foreground/90 group-hover/item:text-secondary group-hover/item:translate-x-1 transition-all">Bolsas e mochilas</span>
                    </li>
                  </ul>

                  {/* Carrossel Melhorado */}
                  <div className="relative h-40 rounded-xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
                    <div className="flex animate-slide-infinite h-full">
                      <img src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop" alt="Canecas personalizadas" className="w-full h-full object-cover flex-shrink-0 filter brightness-90 group-hover:brightness-100 transition-all" />
                      <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop" alt="Brindes corporativos" className="w-full h-full object-cover flex-shrink-0 filter brightness-90 group-hover:brightness-100 transition-all" />
                      <img src="https://images.unsplash.com/photo-1622290449557-d7e7a1c66b89?w=400&h=300&fit=crop" alt="Bolsas personalizadas" className="w-full h-full object-cover flex-shrink-0 filter brightness-90 group-hover:brightness-100 transition-all" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card Acrílicos Premium */}
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 border-2 border-border hover:border-accent/40 bg-gradient-to-br from-card via-card to-accent/5 h-full flex flex-col overflow-hidden relative md:col-span-2 lg:col-span-1">
                {/* Background decorativo */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all duration-500" />

                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <IdentificationCard size={32} weight="duotone" className="text-accent drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text">Acrílicos Premium</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    Tecnologia QR Code & NFC
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow space-y-6 relative z-10">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 group/item">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent group-hover/item:scale-150 transition-transform" />
                      <span className="text-sm text-foreground/90 group-hover/item:text-accent group-hover/item:translate-x-1 transition-all">Placas de QR Code personalizadas</span>
                    </li>
                    <li className="flex items-center gap-3 group/item">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent group-hover/item:scale-150 transition-transform" />
                      <span className="text-sm text-foreground/90 group-hover/item:text-accent group-hover/item:translate-x-1 transition-all">Tags de Acrílico personalizadas</span>
                    </li>
                    <li className="flex items-center gap-3 group/item">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent group-hover/item:scale-150 transition-transform" />
                      <span className="text-sm text-foreground/90 group-hover/item:text-accent group-hover/item:translate-x-1 transition-all">Cartões de visita com NFC</span>
                    </li>
                    <li className="flex items-center gap-3 group/item">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent group-hover/item:scale-150 transition-transform" />
                      <span className="text-sm text-foreground/90 group-hover/item:text-accent group-hover/item:translate-x-1 transition-all">QR Code integrado com website</span>
                    </li>
                    <li className="flex items-center gap-3 group/item">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent group-hover/item:scale-150 transition-transform" />
                      <span className="text-sm text-foreground/90 group-hover/item:text-accent group-hover/item:translate-x-1 transition-all">Impressão de alta durabilidade</span>
                    </li>
                    <li className="flex items-center gap-3 group/item">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent group-hover/item:scale-150 transition-transform" />
                      <span className="text-sm text-foreground/90 group-hover/item:text-accent group-hover/item:translate-x-1 transition-all">Design personalizado e exclusivo</span>
                    </li>
                  </ul>

                  {/* Carrossel Melhorado */}
                  <div className="relative h-40 rounded-xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
                    <div className="flex animate-slide-infinite h-full">
                      <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop" alt="Placas de acrílico" className="w-full h-full object-cover flex-shrink-0 filter brightness-90 group-hover:brightness-100 transition-all" />
                      <img src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop" alt="QR Code personalizado" className="w-full h-full object-cover flex-shrink-0 filter brightness-90 group-hover:brightness-100 transition-all" />
                      <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop" alt="Cartões NFC" className="w-full h-full object-cover flex-shrink-0 filter brightness-90 group-hover:brightness-100 transition-all" />
                    </div>
                  </div>
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
                Placas de QR code e cartões de visita para orientar, informar e promover.
                Desde projetos simples até sistemas complexos de sinalização.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                <div className="grid gap-6">
                  <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 border-2 hover:border-primary/30 bg-gradient-to-br from-background to-primary/5">
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

                  <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 border-2 hover:border-primary/30 bg-gradient-to-br from-background to-primary/5">
                    <CardHeader>
                      <CardTitle className="text-xl">Sinalização Externa</CardTitle>
                      <CardDescription>
                        Placas e cartões de visitas para comunicação visual
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-3">
                          <span className="text-primary font-bold">✓</span>
                          <span>Placas em Metal</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary font-bold">✓</span>
                          <span>Identificação em portas externas</span>
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
                <Card className="group p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1">
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
                  <Card className="group p-6 border-2 border-primary/20 hover:border-primary/30 bg-gradient-to-br from-background to-primary/5 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1">
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

                  <Card className="group p-6 border-2 border-primary/20 hover:border-primary/30 bg-gradient-to-br from-background to-primary/5 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1">
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

                  <Card className="group p-6 border-2 border-primary/20 hover:border-primary/30 bg-gradient-to-br from-background to-primary/5 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1">
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

              <div className="mt-16">
                <h3 className="text-center text-2xl font-bold mb-8">Por que escolher o Grupo RaVal?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Orçamento Gratuito */}
                  <div className="group relative bg-gradient-to-br from-card to-primary/5 border-2 border-primary/20 hover:border-primary/40 rounded-xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500" />
                    <div className="relative z-10 flex flex-col items-center text-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                        <Tag size={28} weight="duotone" className="text-primary drop-shadow-lg" />
                      </div>
                      <h4 className="font-semibold text-foreground">Orçamento Gratuito</h4>
                      <p className="text-xs text-muted-foreground">Consulta sem compromisso</p>
                    </div>
                  </div>

                  {/* Entrega Rápida */}
                  <div className="group relative bg-gradient-to-br from-card to-secondary/5 border-2 border-secondary/20 hover:border-secondary/40 rounded-xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-all duration-500" />
                    <div className="relative z-10 flex flex-col items-center text-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                        <svg className="text-secondary drop-shadow-lg" width="28" height="28" viewBox="0 0 256 256" fill="currentColor">
                          <path d="M247.42,117l-14-35A15.93,15.93,0,0,0,218.58,72H184V64a8,8,0,0,0-8-8H24A16,16,0,0,0,8,72V184a16,16,0,0,0,16,16H41a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.94,7.94,0,0,0,247.42,117ZM184,88h34.58l9.6,24H184ZM24,72H168v64H24ZM72,208a16,16,0,1,1,16-16A16,16,0,0,1,72,208Zm81-24H103a32,32,0,0,0-62,0H24V152H168v12.31A32.11,32.11,0,0,0,153,184Zm31,24a16,16,0,1,1,16-16A16,16,0,0,1,184,208Zm48-24H215a32.06,32.06,0,0,0-31-24V128h48Z" opacity="0.2" /><path d="M247.42,117l-14-35A15.93,15.93,0,0,0,218.58,72H184V64a8,8,0,0,0-8-8H24A16,16,0,0,0,8,72V184a16,16,0,0,0,16,16H41a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.94,7.94,0,0,0,247.42,117ZM184,88h34.58l9.6,24H184ZM24,72H168v64H24ZM72,208a16,16,0,1,1,16-16A16,16,0,0,1,72,208Zm81-24H103a32,32,0,0,0-62,0H24V152H168v12.31A32.11,32.11,0,0,0,153,184Zm31,24a16,16,0,1,1,16-16A16,16,0,0,1,184,208Zm48-24H215a32.06,32.06,0,0,0-31-24V128h48Z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-foreground">Entrega Rápida</h4>
                      <p className="text-xs text-muted-foreground">Prazos que cabem no seu bolso</p>
                    </div>
                  </div>

                  {/* Suporte Técnico */}
                  <div className="group relative bg-gradient-to-br from-card to-accent/5 border-2 border-accent/20 hover:border-accent/40 rounded-xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-all duration-500" />
                    <div className="relative z-10 flex flex-col items-center text-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                        <svg className="text-accent drop-shadow-lg" width="28" height="28" viewBox="0 0 256 256" fill="currentColor">
                          <path d="M216,128a88,88,0,0,1-176,0c0-27.92,11-47.13,17.21-56.18A8,8,0,1,1,70,80c-3.37,4.92-14,21.18-14,48a72,72,0,0,0,144,0c0-26.82-10.63-43.08-14-48a8,8,0,1,1,12.8-9.62C204.94,80.87,216,100.08,216,128Zm-88-8a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V128A8,8,0,0,0,128,120Zm0-64a8,8,0,0,0-8,8V88a8,8,0,0,0,16,0V64A8,8,0,0,0,128,56Z" opacity="0.2" /><path d="M224,128a96.11,96.11,0,0,1-96,96C71.69,224,48.15,210.5,34.11,181.47A8,8,0,0,1,48,175.53c12.58,26.1,32.85,36.47,80,36.47a80,80,0,0,0,0-160c-47.15,0-67.42,10.37-80,36.47a8,8,0,0,1-13.89-6.94C48.15,52.5,71.69,32,128,32A96.11,96.11,0,0,1,224,128ZM128,72a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V80A8,8,0,0,0,128,72Zm0,56a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V136A8,8,0,0,0,128,128Z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-foreground">Suporte Técnico</h4>
                      <p className="text-xs text-muted-foreground">Assistência completa</p>
                    </div>
                  </div>

                  {/* Garantia de Qualidade */}
                  <div className="group relative bg-gradient-to-br from-card to-primary/5 border-2 border-primary/20 hover:border-primary/40 rounded-xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500" />
                    <div className="relative z-10 flex flex-col items-center text-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                        <svg className="text-primary drop-shadow-lg" width="28" height="28" viewBox="0 0 256 256" fill="currentColor">
                          <path d="M208,80H184V56a24,24,0,0,0-24-24H96A24,24,0,0,0,72,56V80H48A24,24,0,0,0,24,104V208a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V104A24,24,0,0,0,208,80ZM88,56a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8V80H88ZM40,104a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v24H40Zm168,104a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V144H216v64Z" opacity="0.2" /><path d="M208,72H184V56a24,24,0,0,0-24-24H96A24,24,0,0,0,72,56V72H48A24,24,0,0,0,24,96V208a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V96A24,24,0,0,0,208,72ZM88,56a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8V72H88ZM40,96a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v24H40Zm168,112a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V136H216v72Zm-48-48a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16h48A8,8,0,0,1,160,160Z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-foreground">Garantia de Qualidade</h4>
                      <p className="text-xs text-muted-foreground">Excelência garantida</p>
                    </div>
                  </div>
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