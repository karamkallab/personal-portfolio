export const Footer = () => {
  return (
    <footer className="mt-12 py-6 border-t border-border text-center text-sm text-muted-foreground">
      <div className="container mx-auto px-6">
        © {new Date().getFullYear()} Karam Kallab. All rights reserved.
      </div>
    </footer>
  );
};
