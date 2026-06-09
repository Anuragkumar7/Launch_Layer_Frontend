import SEO from '../components/ui/SEO';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for does not exist." />
      <section className="min-h-[70vh] flex items-center justify-center section-padding pt-32">
        <div className="text-center">
          <h1 className="font-display text-8xl font-bold gradient-text mb-4">404</h1>
          <h2 className="font-display text-2xl font-bold mb-4">Page Not Found</h2>
          <p className="text-muted mb-8 max-w-md mx-auto">
            The page you are looking for might have been moved or does not exist.
          </p>
          <Button to="/">Back to Home</Button>
        </div>
      </section>
    </>
  );
}
