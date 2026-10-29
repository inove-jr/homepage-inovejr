import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

const REDES = [
  { name: "LinkedIn", href: "/", icon: "/linkedin_icon.svg" },
  { name: "Instagram", href: "/", icon: "/instagram_icon.svg" },
  { name: "GitHub", href: "/", icon: "/github_icon.svg" },
]

const COLUNAS = [
  {
    title: "Serviços",
    links: [
      { label: "Sites e landing pages", href: "/" },
      { label: "Sistemas web sob medida", href: "/" },
      { label: "Aplicativos mobile", href: "/" },
      { label: "Design de interfaces", href: "/" },
      { label: "Consultoria em tecnologia", href: "/" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { label: "Quem somos", href: "/" },
      { label: "Política de privacidade", href: "/" },
      { label: "Termos de compromisso", href: "/" },
      { label: "Código de conduta", href: "/" },
      { label: "Trabalhe conosco", href: "/" },
    ],
  },
]

const CONTATO = {
  email: "email",
  telefone: "(74) ......",
  endereco: "UNIVASF ....",
}

const linkClass =
  "text-navy-700/80 transition-colors hover:text-inove focus-visible:text-inove dark:text-slate-300 dark:hover:text-inove-soft dark:focus-visible:text-inove-soft " +
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-inove rounded-sm"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="font-sans text-navy-700 dark:text-slate-300" aria-labelledby="footer-title">
      <div className="bg-navy-900 text-white dark:bg-navy-700">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
          <h2
            id="footer-title"
            className="max-w-xl font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl"
          >
            Tem uma ideia? A gente transforma em produto.
          </h2>
          <a
            href={`mailto:${CONTATO.email}`}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-inove px-7 py-3.5 font-semibold text-white transition-colors hover:bg-inove-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Peça um orçamento
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
        <div className="h-1 bg-inove" aria-hidden="true" />
      </div>

      <div className="bg-paper dark:bg-ink">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="md:col-span-2 lg:col-span-1">
            <img src="/logo_i9.svg" alt="Inove Jr. logo" className="h-20 w-20 rounded-2xl dark:bg-white dark:p-2" />
            <p className="mt-5 max-w-sm leading-relaxed">
              A Inove Jr. é uma empresa júnior de tecnologia formada por
              estudantes. Desenvolvemos sites, sistemas e aplicativos com
              acompanhamento profissional e preço justo.
            </p>

            <ul className="mt-6 flex gap-3" aria-label="Redes sociais">
              {REDES.map(({ name, href, icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Inove Jr. no ${name}`}
                    title={name}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-navy-700/10 transition dark:ring-white/10 hover:-translate-y-0.5 hover:ring-inove focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inove"
                  >
                    <img src={icon} alt="" className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {COLUNAS.map(({ title, links }) => (
            <nav key={title} aria-label={title}>
              <h3 className="font-display text-lg font-bold text-navy-900 dark:text-white">{title}</h3>
              <ul className="mt-4 space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className={linkClass}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="font-display text-lg font-bold text-navy-900 dark:text-white">Contato</h3>
            <address className="mt-4 space-y-3 not-italic">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a href={`mailto:${CONTATO.email}`} className={linkClass}>
                  {CONTATO.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a href={`tel:${CONTATO.telefone.replace(/\D/g, "")}`} className={linkClass}>
                  {CONTATO.telefone}
                </a>
              </p>
              <p className="flex items-center gap-2 text-navy-700/80 dark:text-slate-300">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                {CONTATO.endereco}
              </p>
            </address>
          </div>
        </div>
      </div>

      <div className="bg-paper dark:bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-navy-700/15 px-6 py-6 text-sm text-navy-700/70 dark:border-white/10 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Inove Jr. Todos os direitos reservados.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><a href="#privacidade" className={linkClass}>Privacidade</a></li>
            <li><a href="#termos" className={linkClass}>Termos de uso</a></li>
            <li><a href="#cookies" className={linkClass}>Cookies</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
