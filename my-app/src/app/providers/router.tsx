import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PageLoader } from '../../shared/ui/page-loader'
import { routes } from '../../shared/config/routes'

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routes).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  )
}