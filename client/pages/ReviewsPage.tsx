import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Star, ThumbsUp, Flag, Edit2 } from "lucide-react";
import { useState } from "react";

const ReviewsPage = () => {
  const [activeTab, setActiveTab] = useState<"companies" | "internships">("companies");
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const companyReviews = [
    {
      id: 1,
      company: "TechCorp",
      reviewer: "Sarah Chen",
      position: "Full Stack Developer Intern",
      rating: 5,
      title: "Amazing Experience!",
      review:
        "TechCorp provided an incredible internship experience. The mentorship was top-notch and I learned so much about real-world development.",
      date: "2024-02-01",
      verified: true,
      helpful: 24,
      pros: ["Great mentorship", "Learning opportunities", "Good stipend"],
      cons: ["Long working hours"],
    },
    {
      id: 2,
      company: "TechCorp",
      reviewer: "Alex Kumar",
      position: "Frontend Developer Intern",
      rating: 4,
      title: "Good Experience",
      review:
        "Overall a good internship. The work was interesting and the team was supportive. Would recommend to others.",
      date: "2024-01-28",
      verified: true,
      helpful: 18,
      pros: ["Supportive team", "Interesting projects"],
      cons: ["Limited code review feedback"],
    },
    {
      id: 3,
      company: "StartupXYZ",
      reviewer: "Emma Wilson",
      position: "Full Stack Developer Intern",
      rating: 5,
      title: "Life-changing opportunity",
      review:
        "This startup gave me the chance to work on meaningful projects that directly impacted the product. Highly recommend!",
      date: "2024-01-25",
      verified: true,
      helpful: 31,
      pros: ["Meaningful work", "Fast learning", "Great culture"],
      cons: [],
    },
    {
      id: 4,
      company: "WebAgency",
      reviewer: "Michael Brown",
      position: "Frontend Developer Intern",
      rating: 3,
      title: "Average Experience",
      review:
        "The internship was okay. There were some good learning opportunities but also a lot of repetitive work.",
      date: "2024-01-20",
      verified: true,
      helpful: 12,
      pros: ["Portfolio building"],
      cons: ["Repetitive tasks", "Poor communication"],
    },
  ];

  const internshipReviews = [
    {
      id: 1,
      internship: "Full Stack Developer Intern @ TechCorp",
      reviewer: "Sarah Chen",
      rating: 5,
      title: "Perfect Internship",
      review:
        "This position perfectly matched my skills and interests. The company was as described and the work was exactly what I was looking for.",
      date: "2024-02-01",
      verified: true,
      helpful: 15,
      difficulty: "Moderate",
      duration: "3 months",
    },
    {
      id: 2,
      internship: "ML Engineer Intern @ AI Innovations",
      reviewer: "Priya Patel",
      rating: 5,
      title: "Excellent ML Learning",
      review:
        "Incredible opportunity to work on state-of-the-art ML models. The team is world-class and the project was cutting-edge.",
      date: "2024-01-30",
      verified: true,
      helpful: 22,
      difficulty: "Advanced",
      duration: "4 months",
    },
    {
      id: 3,
      internship: "Data Analyst Intern @ DataSoft",
      reviewer: "James Lee",
      rating: 4,
      title: "Good Data Experience",
      review:
        "Solid internship for learning data analysis. Got to work with real datasets and see how insights drive business decisions.",
      date: "2024-01-15",
      verified: true,
      helpful: 8,
      difficulty: "Easy",
      duration: "3 months",
    },
  ];

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle review submission
    setShowReviewForm(false);
    setRating(0);
  };

  return (
    <Layout>
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Reviews & Ratings</h1>
              <p className="text-slate-600">
                Help the community by sharing your internship experience
              </p>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 mb-8 border-b border-slate-200">
              <button
                onClick={() => setActiveTab("companies")}
                className={`px-4 py-3 font-medium border-b-2 transition-colors ${
                  activeTab === "companies"
                    ? "border-primary text-primary"
                    : "border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                Company Reviews
              </button>
              <button
                onClick={() => setActiveTab("internships")}
                className={`px-4 py-3 font-medium border-b-2 transition-colors ${
                  activeTab === "internships"
                    ? "border-primary text-primary"
                    : "border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                Internship Reviews
              </button>
            </div>

            {/* Write Review Button */}
            {!showReviewForm && (
              <div className="mb-8">
                <Button onClick={() => setShowReviewForm(true)} size="lg">
                  Write a Review
                </Button>
              </div>
            )}

            {/* Review Form */}
            {showReviewForm && (
              <form onSubmit={handleSubmitReview} className="trust-card mb-8">
                <h3 className="font-bold text-lg text-slate-900 mb-4">Share Your Experience</h3>

                {/* Company/Internship Selection */}
                <div className="mb-4 space-y-2">
                  <label className="block text-sm font-medium text-slate-900">
                    {activeTab === "companies" ? "Company" : "Internship"}
                  </label>
                  <select className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <option>Select...</option>
                    {activeTab === "companies" ? (
                      <>
                        <option>TechCorp</option>
                        <option>StartupXYZ</option>
                        <option>WebAgency</option>
                      </>
                    ) : (
                      <>
                        <option>Full Stack Developer Intern @ TechCorp</option>
                        <option>ML Engineer Intern @ AI Innovations</option>
                        <option>Data Analyst Intern @ DataSoft</option>
                      </>
                    )}
                  </select>
                </div>

                {/* Rating */}
                <div className="mb-4 space-y-2">
                  <label className="block text-sm font-medium text-slate-900">Rating</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          size={28}
                          className={
                            star <= (hoveredRating || rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-slate-300"
                          }
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <div className="mb-4 space-y-2">
                  <label className="block text-sm font-medium text-slate-900">Review Title</label>
                  <input
                    type="text"
                    placeholder="e.g., Great experience!"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>

                {/* Review Text */}
                <div className="mb-6 space-y-2">
                  <label className="block text-sm font-medium text-slate-900">Your Review</label>
                  <textarea
                    placeholder="Share your experience..."
                    rows={4}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Button type="submit">Submit Review</Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowReviewForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            )}

            {/* Reviews List */}
            <div className="space-y-4">
              {activeTab === "companies"
                ? companyReviews.map((review) => (
                    <div key={review.id} className="trust-card">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-bold text-slate-900">{review.title}</h3>
                            {review.verified && (
                              <span className="px-2 py-0.5 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                                Verified
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={16}
                                  className={
                                    i < review.rating
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "text-slate-300"
                                  }
                                />
                              ))}
                            </div>
                            <span className="text-sm text-slate-600">
                              {review.reviewer} • {review.position}
                            </span>
                          </div>

                          <p className="text-sm text-slate-600 mb-3">{review.review}</p>

                          {/* Pros & Cons */}
                          <div className="mb-3 space-y-1">
                            {review.pros.length > 0 && (
                              <div className="flex flex-wrap gap-2">
                                {review.pros.map((pro) => (
                                  <span
                                    key={pro}
                                    className="px-2.5 py-1 bg-green-50 text-green-700 text-xs rounded-full"
                                  >
                                    ✓ {pro}
                                  </span>
                                ))}
                              </div>
                            )}
                            {review.cons.length > 0 && (
                              <div className="flex flex-wrap gap-2">
                                {review.cons.map((con) => (
                                  <span
                                    key={con}
                                    className="px-2.5 py-1 bg-red-50 text-red-700 text-xs rounded-full"
                                  >
                                    ✗ {con}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>

                          <p className="text-xs text-slate-500">{review.date}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pt-3 border-t border-slate-200">
                        <Button variant="ghost" size="sm" className="flex items-center gap-1">
                          <ThumbsUp size={16} />
                          {review.helpful}
                        </Button>
                        <Button variant="ghost" size="sm" className="flex items-center gap-1">
                          <Flag size={16} />
                          Report
                        </Button>
                      </div>
                    </div>
                  ))
                : internshipReviews.map((review) => (
                    <div key={review.id} className="trust-card">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-bold text-slate-900">{review.title}</h3>
                            {review.verified && (
                              <span className="px-2 py-0.5 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                                Verified
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={
                                    i < review.rating
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "text-slate-300"
                                  }
                                  size={16}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-slate-600">{review.reviewer}</span>
                          </div>

                          <p className="text-sm text-slate-600 mb-3">{review.review}</p>

                          <div className="grid grid-cols-3 gap-2 mb-3">
                            <div>
                              <p className="text-xs text-slate-500">Difficulty</p>
                              <p className="text-sm font-medium text-slate-900">{review.difficulty}</p>
                            </div>
                            <div>
                              <p className="text-xs text-slate-500">Duration</p>
                              <p className="text-sm font-medium text-slate-900">{review.duration}</p>
                            </div>
                            <div>
                              <p className="text-xs text-slate-500">Position</p>
                              <p className="text-sm font-medium text-slate-900">{review.internship}</p>
                            </div>
                          </div>

                          <p className="text-xs text-slate-500">{review.date}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pt-3 border-t border-slate-200">
                        <Button variant="ghost" size="sm" className="flex items-center gap-1">
                          <ThumbsUp size={16} />
                          {review.helpful}
                        </Button>
                        <Button variant="ghost" size="sm" className="flex items-center gap-1">
                          <Flag size={16} />
                          Report
                        </Button>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ReviewsPage;
