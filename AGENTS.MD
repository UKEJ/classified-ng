# Classified.ng — Agent Instructions

## 1. Project Overview

Classified.ng is a modern Nigerian marketplace platform focused on helping people discover, buy, sell, and connect.

The core marketplace loop is:

Discover → Search → View → Verify → Contact → Buy/Sell → Review

The platform is intended to support:

- Buyers
- Individual sellers
- Brands
- Realtors / property agents
- Administrators

The product should feel modern, trustworthy, fast, visual, and distinctly different from traditional classified platforms.

---

## 2. Technology Stack

### Frontend

- React
- Vite
- JavaScript
- Tailwind CSS
- React Router

### Backend

Planned:

- Node.js
- Express
- REST API

### Database

Planned:

- PostgreSQL

### Version Control

- Git
- GitHub

Do not introduce a major alternative framework or replace the existing stack without explicit approval.

---

## 3. Frontend Architecture

Use a modular component-based architecture.

Expected structure:

src/
├── assets/
├── components/
│   ├── layout/
│   ├── marketplace/
│   ├── seller/
│   └── ui/
├── data/
├── hooks/
├── layouts/
├── pages/
├── services/
├── utils/
├── App.jsx
├── index.css
└── main.jsx

Pages should compose reusable components.

Do not put large amounts of reusable UI directly inside page components.

Avoid unnecessary duplication.

---

## 4. Product Areas

The application should eventually contain:

### Public

- Home
- Categories
- Search Results
- Listing Details
- Seller Profile
- Brand Storefront
- Real Estate

### Authentication

- Sign Up
- Sign In

### User

- Profile
- Saved Listings
- Messages

### Seller

- Seller Dashboard
- My Listings
- Create Listing
- Edit Listing

### Administration

- Admin Dashboard
- User Management
- Listing Management
- Reports
- Verification

---

## 5. Core User Flows

### Buyer

Home
→ Search / Category
→ Search Results
→ Listing Details
→ Seller Profile
→ Contact Seller
→ Conversation
→ Deal
→ Review

### Seller

Sign Up
→ Seller Profile
→ Create Listing
→ Submit
→ Listing Published
→ Buyer Contact
→ Conversation
→ Deal
→ Review

### Brand

Account
→ Brand Application
→ Verification
→ Brand Storefront
→ Products
→ Customers

### Real Estate

Real Estate
→ Buy / Rent / Shortlet
→ Property Search
→ Property Details
→ Agent Profile
→ Contact / Inspection Request

---

## 6. Listing Architecture

Listings should eventually support:

- ID
- Title
- Description
- Price
- Category
- Subcategory
- Images
- Location
- Seller
- Condition
- Availability
- Status
- Created date
- Updated date

A listing should reference its seller rather than duplicating seller information throughout the application.

---

## 7. Verification System

The platform uses a verification ladder:

Phone Verified
→ Identity Verified
→ Business Verified
→ Trusted Brand

Verification status should be represented through reusable UI components and data.

Do not hardcode verification states into individual pages.

---

## 8. Categories

Core categories currently include:

- Electronics
- Clothing
- Real Estate
- Vehicles
- Services
- Jobs

Streetwear is NOT a separate top-level category.

Streetwear and related products belong under Clothing.

Categories should be data-driven so they can be expanded later.

---

## 9. Design System

Design direction:

- Modern
- Clean
- Visual
- Trust-focused
- Fast
- Responsive
- Mobile-first
- Accessible

Initial visual direction:

- Primary: Blue
- Text: Near-black
- Background: White / light neutral
- Borders: Light neutral
- Success: Green
- Warning: Amber
- Error: Red

Use Tailwind CSS consistently.

Do not scatter arbitrary styling decisions throughout components when a reusable design token or shared component is appropriate.

---

## 10. Responsive Design

The application must work across:

- Mobile
- Tablet
- Desktop
- Large desktop

Do not treat mobile as an afterthought.

Desktop layouts should adapt naturally to smaller screens.

Navigation should have a dedicated mobile experience where appropriate.

---

## 11. Component Rules

Prefer reusable components such as:

- Navbar
- Footer
- MobileNav
- ListingCard
- ListingGrid
- CategoryCard
- SearchBar
- FilterPanel
- LocationSelector
- SellerCard
- SellerBadge
- VerificationBadge
- Button
- Input
- Modal
- Badge
- Avatar

Do not create a reusable component merely for the sake of abstraction.

Use components when they represent a meaningful repeated UI pattern or domain concept.

---

## 12. Code Quality

Write clear, readable JavaScript.

Prefer simple solutions over unnecessary abstraction.

Use descriptive names.

Avoid:

- Unnecessary complexity
- Giant components
- Duplicate logic
- Hardcoded repeated data
- Unused dependencies
- Unused imports
- Dead code

Keep components focused.

---

## 13. Data

During frontend development, mock data may be used.

Mock data should live in:

src/data/

Do not mix large mock datasets directly into UI components.

When the backend is introduced, frontend components should consume services/API functions rather than directly containing database logic.

---

## 14. Routing

Use React Router for application navigation.

Do not build a custom routing system.

Routes should correspond to meaningful application pages.

Keep route definitions organized rather than scattering navigation logic throughout components.

---

## 15. Backend Separation

When backend development begins:

Frontend:
React → Services → REST API

Backend:
Routes → Controllers → Services → Database

Do not put database credentials, secrets, or server-side logic inside the frontend.

---

## 16. Security

Never commit:

- API keys
- Passwords
- Database credentials
- JWT secrets
- Private tokens
- Environment secrets

Use environment variables for secrets.

Do not place sensitive information in client-side source code.

---

## 17. Dependencies

Before adding a significant dependency:

1. Determine whether the existing stack already solves the problem.
2. Prefer lightweight, established solutions.
3. Avoid adding dependencies for trivial functionality.
4. Do not replace existing major dependencies without approval.

---

## 18. Product Decisions

The coding agent is responsible for implementation.

The coding agent must NOT independently change:

- Core product requirements
- Major user flows
- Business rules
- Authentication architecture
- Verification rules
- Database architecture
- Major dependencies
- Overall UI/UX direction
- Folder architecture

If a major architectural change appears necessary, explain the reason and request approval.

---

## 19. Development Workflow

Follow:

BUILD
→ RUN
→ TEST
→ UNDERSTAND
→ COMMIT
→ NEXT FEATURE

After implementing a meaningful feature:

1. Run the application.
2. Check for errors.
3. Test the relevant user flow.
4. Check responsive behavior where applicable.
5. Explain what changed.
6. Report any issues.
7. Only then prepare the change for commit.

---

## 20. Git Rules

Use meaningful commits.

Examples:

feat: add marketplace navigation

feat: create listing card

feat: add search results page

fix: correct mobile navigation

refactor: simplify listing components

chore: update project configuration

Do not rewrite Git history unless explicitly instructed.

Do not force-push unless explicitly authorized.

---

## 21. Working Style

Work incrementally.

Do not generate the entire future marketplace in one uncontrolled change.

Build one coherent feature or system at a time.

After each meaningful milestone, verify that the existing application still works.

When requirements are ambiguous, identify the ambiguity instead of silently inventing an important product decision.

For minor implementation details, use reasonable engineering judgment.

For major product or architectural decisions, ask for approval.

---

## 22. Current Development Phase

The project is currently transitioning from:

Phase 1 — Foundation

to:

Phase 2 — UI/UX implementation.

The foundation currently uses:

- React
- Vite
- JavaScript
- ESLint
- Tailwind CSS
- Git
- GitHub

The next implementation work should focus on:

1. Application layout
2. Navigation
3. Core reusable UI components
4. Homepage structure
5. Marketplace visual language
6. Responsive behavior
7. Initial routing

Do not implement the backend yet unless explicitly instructed.

---

## 23. Important Principle

Classified.ng is intended to become a serious production marketplace.

Prioritize:

- Maintainability
- Scalability
- Security
- Reusability
- Clear architecture
- Good UX
- Performance
- Understanding over shortcuts

The goal is not merely to make the application look good.

The goal is to build a solid foundation that can grow into a real product.