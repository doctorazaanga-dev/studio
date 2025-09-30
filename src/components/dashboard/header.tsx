import { ThemeToggle } from '@/components/theme-toggle';

export default function Header() {
  return (
    <header className="py-4 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-headline font-semibold text-primary">
          Soulful Reflections
        </h1>
        <ThemeToggle />
      </div>
    </header>
  );
}
