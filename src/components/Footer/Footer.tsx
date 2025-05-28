const Footer = () => {
  return (
    <div className="px-6 py-4 border-t border-primary-200/10 bg-neutral-50 w-full flex items-center justify-between gap-4">
      <span className="text-primary-600 text-sm">© 2025 Levke Oelke</span>
      <div className="flex items-center gap-4">
        <a href="/#/kontakt" className="text-sm text-primary-600 hover:text-primary transition-colors duration-300">
          Kontakt
        </a>
      </div>
    </div>
  )
}

export default Footer