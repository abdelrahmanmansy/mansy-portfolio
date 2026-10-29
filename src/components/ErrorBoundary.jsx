import { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error) {
    console.error('App crashed:', error)
  }

  render() {
    if (!this.state.error) return this.props.children
    const base = import.meta.env.BASE_URL || '/'

    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-paper px-6 text-center text-ink">
        <p className="mono-label text-accent">Error</p>
        <h2 className="font-display text-2xl">حصلت مشكلة غير متوقعة</h2>
        <p className="max-w-md text-sm leading-relaxed text-ink-soft">
          حدث خطأ أثناء عرض الصفحة. جرّب تحديث الصفحة أو العودة للرئيسية — وإن استمرت المشكلة تواصل معي مباشرة.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => window.location.reload()}
            className="bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-accent"
          >
            تحديث الصفحة
          </button>
          <button
            onClick={() => {
              window.location.href = base
            }}
            className="border-b border-ink pb-1 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            العودة للرئيسية
          </button>
        </div>
      </div>
    )
  }
}
