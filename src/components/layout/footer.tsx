export function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto max-w-5xl px-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} by Arpan Mondal
      </div>
    </footer>
  );
}