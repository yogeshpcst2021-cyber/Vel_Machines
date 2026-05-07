import { useEffect, useState } from 'react';
import {
  MapPin,
  Briefcase,
  Clock,
  Send,
  X,
  CheckCircle,
} from 'lucide-react';

import GlassCard from '../components/GlassCard';
import SectionHeading from '../components/SectionHeading';

export default function Careers() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [selectedJob, setSelectedJob] = useState<any>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch('/api/careers')
      .then((r) => r.json())
      .then((data) => setJobs(data))
      .catch(() => setJobs([]));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch('/api/job-applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        job_id: selectedJob?.id,
      }),
    });

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setSelectedJob(null);

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <div className="pt-24 pb-12 bg-[#FAF6EF]">

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">

        <div className="absolute inset-0">
          <img
            src="/images/factory-floor.jpg"
            alt="Careers"
            className="w-full h-full object-cover scale-110"
            style={{ objectPosition: 'center 30%' }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F0E6]/90 via-[#FAF6EF]/80 to-[#FAF6EF]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto">

            <h1 className="text-4xl md:text-6xl font-bold text-[#2B2B2B] mb-6">
              Join{' '}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
                Our Team
              </span>
            </h1>

            <p className="text-[#5C4B3B] text-lg leading-relaxed">
              Be part of India's leading industrial machinery company.
              We're always looking for talented individuals.
            </p>

          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="py-12 bg-[#F5F0E6]">

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionHeading
            title="Open Positions"
            subtitle="Current opportunities across our divisions"
          />

          {jobs.length > 0 ? (
            <div className="space-y-4">

              {jobs.map((job) => (
                <GlassCard key={job.id} hover className="group">

                  <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">

                    <div className="flex-1">

                      <h3 className="text-[#2B2B2B] font-semibold text-xl mb-2 group-hover:text-[#2563EB] transition-colors">
                        {job.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-[#5C4B3B]">

                        <span className="flex items-center gap-1">
                          <Briefcase size={14} />
                          {job.department}
                        </span>

                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {job.location}
                        </span>

                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {job.type}
                        </span>

                      </div>

                      <p className="text-[#5C4B3B] text-sm mt-3 line-clamp-2">
                        {job.description}
                      </p>

                    </div>

                    <button
                      onClick={() => setSelectedJob(job)}
                      className="shrink-0 px-6 py-3 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] font-medium hover:bg-[#2563EB]/20 transition-all duration-300"
                    >
                      Apply Now
                    </button>

                  </div>

                </GlassCard>
              ))}

            </div>
          ) : (
            <div className="space-y-4">

              {[1, 2, 3].map((i) => (
                <GlassCard key={i}>

                  <div className="p-6 md:p-8 space-y-3">

                    <div className="h-6 w-1/3 bg-[#E9E1D3] rounded" />

                    <div className="flex gap-4">
                      <div className="h-4 w-24 bg-[#EFE7DA] rounded" />
                      <div className="h-4 w-24 bg-[#EFE7DA] rounded" />
                      <div className="h-4 w-24 bg-[#EFE7DA] rounded" />
                    </div>

                    <div className="h-4 w-full bg-[#EFE7DA] rounded" />

                  </div>

                </GlassCard>
              ))}

            </div>
          )}

        </div>
      </section>

      {/* Modal */}
      {selectedJob && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm"
          onClick={() => setSelectedJob(null)}
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-3xl bg-[#FAF6EF] border border-[#D6C7B2] shadow-2xl p-8"
          >

            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-[#EFE7DA] border border-[#D6C7B2] flex items-center justify-center text-[#5C4B3B] hover:text-[#2B2B2B] transition-colors"
            >
              <X size={18} />
            </button>

            {submitted ? (
              <div className="text-center py-8">

                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />

                <h3 className="text-[#2B2B2B] font-semibold text-xl mb-2">
                  Application Submitted!
                </h3>

                <p className="text-[#5C4B3B]">
                  We'll get back to you soon.
                </p>

              </div>
            ) : (
              <>

                <h3 className="text-[#2B2B2B] font-semibold text-xl mb-1">
                  Apply for {selectedJob.title}
                </h3>

                <p className="text-[#5C4B3B] text-sm mb-6">
                  {selectedJob.department} &middot; {selectedJob.location}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">

                  <div>
                    <label className="block text-[#5C4B3B] text-sm mb-2">
                      Full Name
                    </label>

                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#D6C7B2] text-[#2B2B2B] placeholder-[#A08B78] focus:outline-none focus:border-[#2563EB]/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-[#5C4B3B] text-sm mb-2">
                      Email
                    </label>

                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#D6C7B2] text-[#2B2B2B] placeholder-[#A08B78] focus:outline-none focus:border-[#2563EB]/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-[#5C4B3B] text-sm mb-2">
                      Phone
                    </label>

                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#D6C7B2] text-[#2B2B2B] placeholder-[#A08B78] focus:outline-none focus:border-[#2563EB]/50 transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-[#5C4B3B] text-sm mb-2">
                      Message / Cover Letter
                    </label>

                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#D6C7B2] text-[#2B2B2B] placeholder-[#A08B78] focus:outline-none focus:border-[#2563EB]/50 transition-all resize-none"
                      placeholder="Tell us why you're a great fit..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#2563EB]/20"
                    style={{
                      background:
                        'linear-gradient(135deg, #2563EB, #38BDF8)',
                    }}
                  >
                    <Send size={18} className="inline mr-2" />
                    Submit Application
                  </button>

                </form>

              </>
            )}

          </div>
        </div>
      )}
    </div>
  );
}