import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HardHat,
  Activity,
  Route as RouteIcon,
  FileText,
  ShieldAlert,
  HeartPulse,
  Check,
  Star,
  MessageSquare,
  Search,
  Compass,
  Instagram,
  Quote,
} from "lucide-react";
import { WhatsAppButton, WHATSAPP_URL } from "@/components/lp/WhatsAppButton";
import { StickyCta } from "@/components/lp/StickyCta";
import { Section, Eyebrow, SectionTitle } from "@/components/lp/Section";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";
import sobreImg from "@/assets/sobre.jpg";
import trabalhoImg from "@/assets/trabalho.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Jaqueline Toledo | Advogada Trabalhista Online" },
      {
        name: "description",
        content:
          "Orientação jurídica em Direito Trabalhista e Previdenciário: acidente de trabalho, doença ocupacional, rescisão e insalubridade. Atendimento 100% online.",
      },
      {
        property: "og:title",
        content: "Dra. Jaqueline Toledo | Advogada Trabalhista Online",
      },
      {
        property: "og:description",
        content:
          "Entenda seus direitos em casos de acidente de trabalho, doença ocupacional e rescisão. Fale pelo WhatsApp com a Dra. Jaqueline Toledo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const servicos = [
  {
    icon: HardHat,
    title: "Acidente de Trabalho",
    text: "Para trabalhadores que sofreram quedas, cortes, perfurações ou outros acidentes durante suas atividades.",
  },
  {
    icon: Activity,
    title: "Doença Ocupacional",
    text: "Casos envolvendo dores na coluna, cervical, lombar, tendinite, esforço repetitivo, carregamento de peso ou problemas causados pelas condições de trabalho.",
  },
  {
    icon: RouteIcon,
    title: "Acidente de Trajeto",
    text: "Orientação para acidentes ocorridos durante o deslocamento relacionado ao trabalho.",
  },
  {
    icon: FileText,
    title: "Verbas Rescisórias",
    text: "Análise dos valores e direitos relacionados ao encerramento do contrato de trabalho.",
  },
  {
    icon: ShieldAlert,
    title: "Insalubridade",
    text: "Orientação para profissionais expostos a condições de trabalho prejudiciais à saúde.",
  },
  {
    icon: HeartPulse,
    title: "Direito Previdenciário",
    text: "Orientação relacionada a benefícios previdenciários e auxílio-maternidade.",
  },
];

const situacoes = [
  "Você carrega peso constantemente no trabalho?",
  "Começou a sentir dores na lombar ou cervical depois de iniciar determinada função?",
  "Desenvolveu tendinite ou alguma lesão por esforço repetitivo?",
  "Sofreu uma queda ou acidente trabalhando?",
  "Foi demitido e tem dúvidas se recebeu todos os seus direitos?",
  "Trabalha exposto a condições prejudiciais à saúde?",
];

const etapas = [
  {
    icon: MessageSquare,
    title: "Entre em contato",
    text: "Conte brevemente o que aconteceu através do WhatsApp.",
  },
  {
    icon: Search,
    title: "Análise do caso",
    text: "A situação e os documentos são analisados para entender quais caminhos jurídicos podem existir.",
  },
  {
    icon: Compass,
    title: "Orientação",
    text: "Você recebe uma orientação clara sobre os próximos passos.",
  },
];

const faq = [
  {
    q: "Meu atendimento pode ser feito totalmente online?",
    a: "Sim. O atendimento é 100% online, do primeiro contato pelo WhatsApp ao acompanhamento do caso, com envio de documentos de forma digital.",
  },
  {
    q: "Como sei se meu problema pode ser considerado doença ocupacional?",
    a: "Dores, lesões e limitações que surgem ou se agravam por causa da rotina de trabalho podem ter relação com a atividade exercida. Essa relação precisa ser analisada caso a caso, considerando função, documentos e histórico médico.",
  },
  {
    q: "Acidente no caminho do trabalho pode gerar algum direito?",
    a: "Acidentes ocorridos no trajeto relacionado ao trabalho podem ter tratamento jurídico próprio. É necessário analisar as circunstâncias para verificar quais direitos podem existir.",
  },
  {
    q: "Fui demitido. Como sei se minha rescisão está correta?",
    a: "A análise considera o tipo de desligamento, os valores pagos, o histórico de jornada e outros pontos do contrato, para verificar se algo deixou de ser observado.",
  },
  {
    q: "Preciso ter documentos para entrar em contato?",
    a: "Não. Você pode iniciar a conversa apenas contando o que aconteceu. Se documentos forem necessários, você será orientado sobre quais reunir.",
  },
  {
    q: "Como funciona a análise do meu caso?",
    a: "Depois do primeiro contato, sua situação e os documentos disponíveis são avaliados para identificar quais caminhos jurídicos podem existir. Em seguida você recebe uma orientação clara sobre os próximos passos.",
  },
];

function LandingPage() {
  return (
    <main className="overflow-x-hidden bg-background pb-20 md:pb-0">
      {/* HERO */}
      <header className="relative bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[85vh]">
          <div className="reveal flex flex-col justify-center px-5 py-14 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-20">
            <Eyebrow>Direito Trabalhista e Previdenciário</Eyebrow>
            <h1 className="mt-6 max-w-xl text-4xl leading-[1.08] text-primary sm:text-5xl md:text-[3.25rem]">
              Teve seus direitos desrespeitados no trabalho?
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Receba orientação jurídica para entender seus direitos em casos de acidente de
              trabalho, doença ocupacional, rescisão e outras questões trabalhistas.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton>Falar com o escritório</WhatsAppButton>
              <Button asChild variant="outlineGold" size="xl">
                <a href="#servicos">Conheça nossa atuação</a>
              </Button>
            </div>
            <div className="mt-10 h-px w-full max-w-lg bg-border" />
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">Dra. Jaqueline Toledo</span>
              <span className="mx-2 text-gold">•</span>
              Direito Trabalhista e Previdenciário
              <span className="mx-2 text-gold">•</span>
              Atendimento 100% online
            </p>
          </div>

          <div className="relative min-h-[380px] md:min-h-full">
            <img
              src={heroImg}
              alt="Dra. Jaqueline Toledo, advogada trabalhista"
              className="absolute inset-0 size-full object-cover object-top"
              width={1200}
              height={1800}
              fetchPriority="high"
            />
          </div>
        </div>
      </header>

      {/* SERVIÇOS */}
      <Section id="servicos">
        <div className="max-w-2xl">
          <Eyebrow>Áreas de atuação</Eyebrow>
          <SectionTitle>Como posso te ajudar?</SectionTitle>
          <p className="mt-4 text-muted-foreground">
            Cada situação é analisada individualmente para verificar quais direitos podem existir no
            seu caso.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/50"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-gold/20">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <WhatsAppButton>Falar com o escritório</WhatsAppButton>
        </div>
      </Section>

      {/* IDENTIFICAÇÃO */}
      <Section className="bg-secondary/60">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <Eyebrow>Você se identifica?</Eyebrow>
            <SectionTitle>Alguma dessas situações faz parte da sua rotina?</SectionTitle>
            <ul className="mt-8 space-y-3">
              {situacoes.map((s) => (
                <li
                  key={s}
                  className="flex min-w-0 items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm leading-relaxed"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-gold/40 bg-card p-7 shadow-[var(--shadow-card)]">
            <Quote className="size-7 text-gold" />
            <p className="mt-4 font-serif text-2xl leading-snug">
              Você não precisa descobrir tudo isso sozinho. Converse com uma profissional e entenda
              quais direitos podem existir no seu caso.
            </p>
            <div className="mt-7">
              <WhatsAppButton className="w-full">Falar com o escritório</WhatsAppButton>
            </div>
          </div>
        </div>
      </Section>

      {/* COMO FUNCIONA */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <div className="relative order-2 lg:order-1">
            <div aria-hidden className="absolute -inset-3 rounded-[2rem] border border-gold/30" />
            <img
              src={trabalhoImg}
              alt="Dra. Jaqueline Toledo em atendimento online"
              className="relative w-full rounded-[1.75rem] object-cover shadow-[var(--shadow-soft)]"
              width={1000}
              height={1500}
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>Simples do início ao fim</Eyebrow>
            <SectionTitle>Como funciona</SectionTitle>
            <ol className="mt-8 space-y-5">
              {etapas.map(({ icon: Icon, title, text }, i) => (
                <li key={title} className="flex min-w-0 gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-wine)] text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg">
                      <span className="mr-2 text-gold">{i + 1}.</span>
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-9">
              <WhatsAppButton>Falar com o escritório</WhatsAppButton>
            </div>
          </div>
        </div>
      </Section>

      {/* SOBRE */}
      <Section className="bg-secondary/60">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div aria-hidden className="absolute -inset-3 rounded-[2rem] border border-gold/30" />
            <img
              src={sobreImg}
              alt="Retrato profissional da advogada Jaqueline Toledo"
              className="relative w-full rounded-[1.75rem] object-cover shadow-[var(--shadow-soft)]"
              width={1100}
              height={1650}
              loading="lazy"
            />
          </div>
          <div>
            <Eyebrow>Sobre a advogada</Eyebrow>
            <SectionTitle>Quem vai analisar o seu caso</SectionTitle>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Sou a <strong className="text-foreground">Dra. Jaqueline Toledo</strong>, advogada
              desde 2022, com atuação em Direito Trabalhista e Previdenciário. Atendo trabalhadores
              de todo o Brasil de forma 100% online, ouvindo cada história com atenção e explicando
              tudo em linguagem simples, sem juridiquês.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Meu trabalho começa por entender o que aconteceu com você para, então, analisar quais
              direitos podem existir no seu caso e quais caminhos são possíveis.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="font-serif text-3xl text-primary">+200</p>
                <p className="text-xs text-muted-foreground">clientes atendidos</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">avaliação no Google</p>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <WhatsAppButton>Falar com o escritório</WhatsAppButton>
              <a
                href="https://instagram.com/dra.jaquelinethany"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center gap-2 rounded-full border border-gold/60 px-6 text-sm font-medium text-primary transition-colors hover:bg-gold/10"
              >
                <Instagram className="size-4" />
                @dra.jaquelinethany
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* PROVA SOCIAL */}
      <Section id="avaliacoes">
        <div className="max-w-2xl">
          <Eyebrow>Prova social</Eyebrow>
          <SectionTitle>Quem já precisou de ajuda conta como foi</SectionTitle>
          <p className="mt-4 text-muted-foreground">
            Espaço reservado para as avaliações reais do Google e prints de clientes atendidos.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex min-h-52 flex-col justify-between rounded-2xl border border-dashed border-gold/50 bg-card p-6"
            >
              <span className="flex gap-0.5 text-gold/50">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-current" />
                ))}
              </span>
              <p className="text-sm text-muted-foreground">
                Área preparada para receber a avaliação do Google ou o print do depoimento do
                cliente.
              </p>
              <span className="text-xs uppercase tracking-widest text-muted-foreground/70">
                Avaliação {i + 1}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-secondary/60">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr]">
          <div>
            <Eyebrow>Dúvidas frequentes</Eyebrow>
            <SectionTitle>Perguntas que sempre recebo</SectionTitle>
            <p className="mt-4 text-sm text-muted-foreground">
              Não encontrou sua dúvida? Pergunte diretamente pelo WhatsApp.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faq.map(({ q, a }) => (
              <AccordionItem key={q} value={q} className="border-border">
                <AccordionTrigger className="text-left font-serif text-lg hover:no-underline">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* CTA FINAL */}
      <section className="relative isolate overflow-hidden bg-[image:var(--gradient-wine)] px-5 py-20 text-center text-primary-foreground sm:px-8 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 bottom-0 size-80 rounded-full bg-gold/10 blur-3xl"
        />
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-8 w-24 gold-rule" />
          <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl">
            Você pode ter direitos que ainda não conhece.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-primary-foreground/80">
            Explique sua situação e receba uma orientação inicial para entender quais caminhos podem
            existir no seu caso.
          </p>
          <div className="mt-9 flex justify-center">
            <WhatsAppButton variant="gold" className="w-full sm:w-auto">
              Falar com o escritório
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background px-5 py-10 text-center text-xs text-muted-foreground sm:px-8">
        <p className="font-serif text-lg text-foreground">Dra. Jaqueline Toledo</p>
        <p className="mt-1">Direito Trabalhista e Previdenciário · Atendimento 100% online</p>
        <p className="mt-4">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="underline">
            (11) 95196-6546
          </a>
        </p>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed">
          Este site tem caráter meramente informativo, em conformidade com o Código de Ética e
          Disciplina da OAB. Não há captação de clientela nem promessa de resultado.
        </p>
      </footer>

      <StickyCta />
    </main>
  );
}
