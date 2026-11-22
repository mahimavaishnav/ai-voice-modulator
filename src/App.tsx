import './App.css'
import React, { Suspense, lazy } from 'react'
import { Toaster } from 'sonner'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './routes/Layout'

const LoginForm = lazy(() => import('./components/authentication/LoginForm'));
const SignupForm = lazy(() => import('./components/authentication/SignupForm'));
const Home = lazy(() => import('./pages/Home'));
const Videos = lazy(() => import('./pages/Videos'));

const App: React.FC = () => {
  return (
    <>
      <Suspense fallback={
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-black font-sans text-sm text-zinc-500 dark:text-zinc-400">
          <div className="relative w-8 h-8 flex items-center justify-center bg-black dark:bg-white text-white dark:text-black rounded-md overflow-hidden animate-pulse mb-3">
            <svg viewBox="0 0 100 100" className="w-4.5 h-4.5 fill-current">
              <polygon points="50,15 90,85 10,85" />
            </svg>
          </div>
          <span className="font-medium tracking-tight animate-pulse">Loading AI Voice Modulator...</span>
        </div>
      }>
        <Routes>
          <Route path='/register' element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />

          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/videos' element={<Videos />} />
          </Route>

          {/* Any screen not on this branch falls back to the landing page */}
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Suspense>
      <Toaster position="top-right" richColors />
    </>
  )
}

export default App
