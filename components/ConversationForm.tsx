import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

export const ConversationForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitted(true);

        // Reset form after delay
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 5000);
    };

    return (
        <div className="w-full max-w-xl mx-auto">
            <div className="bg-[#121214] border border-[#CABCA1]/10 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#CABCA1]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#CABCA1]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <AnimatePresence mode="wait">
                    {!submitted ? (
                        <motion.form
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, y: -20 }}
                            onSubmit={handleSubmit}
                            className="space-y-5 relative z-10"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="name" className="block text-xs uppercase tracking-wider text-gray-500 mb-1.5 ml-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-[#0b0b0c] border border-[#CABCA1]/10 rounded-xl px-4 py-3.5 text-[#CABCA1] focus:outline-none focus:border-[#CABCA1]/40 focus:ring-1 focus:ring-[#CABCA1]/40 transition-all placeholder:text-gray-700"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs uppercase tracking-wider text-gray-500 mb-1.5 ml-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-[#0b0b0c] border border-[#CABCA1]/10 rounded-xl px-4 py-3.5 text-[#CABCA1] focus:outline-none focus:border-[#CABCA1]/40 focus:ring-1 focus:ring-[#CABCA1]/40 transition-all placeholder:text-gray-700"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-xs uppercase tracking-wider text-gray-500 mb-1.5 ml-1">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-[#0b0b0c] border border-[#CABCA1]/10 rounded-xl px-4 py-3.5 text-[#CABCA1] focus:outline-none focus:border-[#CABCA1]/40 focus:ring-1 focus:ring-[#CABCA1]/40 transition-all placeholder:text-gray-700"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-xs uppercase tracking-wider text-gray-500 mb-1.5 ml-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-[#0b0b0c] border border-[#CABCA1]/10 rounded-xl px-4 py-3.5 text-[#CABCA1] focus:outline-none focus:border-[#CABCA1]/40 focus:ring-1 focus:ring-[#CABCA1]/40 transition-all placeholder:text-gray-700 resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#CABCA1] text-black font-semibold py-4 rounded-xl hover:bg-[#d8cbb3] transition-all duration-300 hover:shadow-[0_0_20px_rgba(202,188,161,0.3)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-[0.98] mt-2"
                            >
                                {isSubmitting ? (
                                    <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                ) : (
                                    <>
                                        Send Message <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </motion.form>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="flex flex-col items-center justify-center py-16 text-center"
                        >
                            <motion.div
                                initial={{ scale: 0, rotate: -45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                                className="w-20 h-20 bg-[#CABCA1]/10 rounded-full flex items-center justify-center mb-6 text-[#CABCA1] border border-[#CABCA1]/20"
                            >
                                <CheckCircle2 className="w-10 h-10" />
                            </motion.div>
                            <h3 className="font-serif text-3xl md:text-4xl text-[#CABCA1] mb-3">Message Received</h3>
                            <p className="text-gray-400 text-lg max-w-xs mx-auto leading-relaxed">
                                Thanks for reaching out! <br />
                                <span className="text-[#CABCA1] font-medium">We will catch you soon.</span>
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
