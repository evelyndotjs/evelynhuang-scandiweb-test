import React, { lazy, Suspense, Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import "./style.css";

const Category = lazy(() => import("./pages/category"));
const Product = lazy(() => import("./pages/product"));
const Cart = lazy(() => import("./pages/cart"));
const NotFound = lazy(() => import("./pages/404"));

export default class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<p>Please wait while loading...</p>}>
          <Routes>
            <Route path={ROUTES.CATEGORY} element={<Category />} />
            <Route path={ROUTES.PRODUCT} element={<Product />} />
            <Route path={ROUTES.CART} element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    );
  }
}
