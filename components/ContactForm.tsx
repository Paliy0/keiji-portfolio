'use client';

import { useState, FormEvent } from 'react';
import { Send, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Using Formspree - replace with your form ID
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch {
      setError('Something went wrong. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
          <Send className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-2xl font-serif mb-2">Message Sent!</h3>
        <p className="text-secondary">
          Thank you for reaching out. I&apos;ll get back to you soon.
        </p>
        <button
          className="btn-secondary mt-8"
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm text-secondary">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-hidden focus:border-accent transition-colors"
            placeholder="Your name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm text-secondary">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-hidden focus:border-accent transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="project-type" className="text-sm text-secondary">
          Project Type
        </label>
        <select
          id="project-type"
          name="project-type"
          className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-hidden focus:border-accent transition-colors appearance-none cursor-pointer"
        >
          <option value="">Select a project type</option>
          <option value="commercial">Commercial</option>
          <option value="music-video">Music Video</option>
          <option value="documentary">Documentary</option>
          <option value="short-film">Short Film</option>
          <option value="event">Event Coverage</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm text-secondary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-hidden focus:border-accent transition-colors resize-none"
          placeholder="Tell me about your project..."
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
