"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import PageHero from "@/components/ui/PageHero";
import { Mail, Facebook, CheckCircle, AlertCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  _honeypot: z.string().max(0),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ defaultValues: { _honeypot: "" } });

  const onSubmit = async (data: FormData) => {
    if (data._honeypot) return; // Spam bot caught
    try {
      // Stub: log payload. Wire up email delivery separately.
      console.log("Contact form submission:", data);
      await new Promise((r) => setTimeout(r, 800)); // Simulate network
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear about your project. Get in touch and we'll respond promptly."
        backgroundImage="/images/contact-hero.jpg"
      />

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <p className="text-[#ff7302] text-xs font-semibold uppercase tracking-widest mb-3">
                Get In Touch
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#f5f5f5] mb-4">
                We Welcome Your Comments &amp; Questions
              </h2>
              <p className="text-[#a0a0a0] leading-relaxed mb-8">
                Whether you&apos;re ready to start building or just exploring your options,
                our team is here to help. Drop us a message and we&apos;ll be in touch.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-full bg-[#ff7302]/10 border border-[#ff7302]/20 shrink-0">
                    <Mail size={16} className="text-[#ff7302]" />
                  </div>
                  <div>
                    <p className="text-[#a0a0a0] text-xs uppercase tracking-widest mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:info@superiorhomesqld.com.au"
                      className="text-[#ff7302] hover:text-[#ffa902] transition-colors text-sm font-medium"
                    >
                      info@superiorhomesqld.com.au
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-full bg-[#ff7302]/10 border border-[#ff7302]/20 shrink-0">
                    <Facebook size={16} className="text-[#ff7302]" />
                  </div>
                  <div>
                    <p className="text-[#a0a0a0] text-xs uppercase tracking-widest mb-1">
                      Facebook
                    </p>
                    <a
                      href="https://www.facebook.com/superiorhomesqld/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ff7302] hover:text-[#ffa902] transition-colors text-sm font-medium"
                    >
                      facebook.com/superiorhomesqld
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-[#111111] border border-[#2a2a2a] rounded-sm">
                <p className="text-[#f5f5f5] font-semibold text-sm mb-1">HIA Member Since 1997</p>
                <p className="text-[#a0a0a0] text-xs leading-relaxed">
                  Servicing the region from Brisbane to Gympie, Queensland.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {status === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center bg-[#111111] border border-[#2a2a2a] rounded-sm p-10">
                  <CheckCircle size={48} className="text-[#ff7302] mb-4" />
                  <h3 className="text-[#f5f5f5] font-bold text-2xl mb-2">
                    Thanks! We&apos;ll be in touch shortly.
                  </h3>
                  <p className="text-[#a0a0a0] mb-6">
                    Your message has been received. A member of our team will respond to you soon.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-[#ff7302] text-sm font-semibold hover:text-[#ffa902] transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-[#111111] border border-[#2a2a2a] rounded-sm p-6 md:p-8 space-y-5"
                  noValidate
                >
                  {/* Honeypot */}
                  <input
                    type="text"
                    {...register("_honeypot")}
                    className="hidden"
                    tabIndex={-1}
                    aria-hidden="true"
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#a0a0a0] text-xs uppercase tracking-widest mb-2">
                        Name <span className="text-[#ff7302]">*</span>
                      </label>
                      <input
                        {...register("name", { required: "Name is required", minLength: { value: 2, message: "Name must be at least 2 characters" } })}
                        type="text"
                        className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-sm px-4 py-3 text-[#f5f5f5] text-sm placeholder-[#3a3a3a] focus:outline-none focus:border-[#ff7302] transition-colors"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[#a0a0a0] text-xs uppercase tracking-widest mb-2">
                        Email <span className="text-[#ff7302]">*</span>
                      </label>
                      <input
                        {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email address" } })}
                        type="email"
                        className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-sm px-4 py-3 text-[#f5f5f5] text-sm placeholder-[#3a3a3a] focus:outline-none focus:border-[#ff7302] transition-colors"
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#a0a0a0] text-xs uppercase tracking-widest mb-2">
                      Message <span className="text-[#ff7302]">*</span>
                    </label>
                    <textarea
                      {...register("message", { required: "Message is required", minLength: { value: 10, message: "Message must be at least 10 characters" } })}
                      rows={6}
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-sm px-4 py-3 text-[#f5f5f5] text-sm placeholder-[#3a3a3a] focus:outline-none focus:border-[#ff7302] transition-colors resize-none"
                      placeholder="Tell us about your project, preferred style, block details, or any questions you have..."
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.message.message}
                      </p>
                    )}
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-sm flex items-center gap-2">
                      <AlertCircle size={16} />
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#ff7302] text-white font-semibold py-4 rounded-sm hover:bg-[#ea7617] transition-all duration-200 active:scale-[0.99] text-sm uppercase tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
