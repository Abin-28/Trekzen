# Trekzen - Smart Travel Planning Platform

## Overview

Trekzen is a comprehensive travel planning platform focused on solving real-world trip routing as a Traveling Salesman Problem (TSP). After extensive research into TSP heuristics, the project adopts a hybrid strategy: we use the Lin–Kernighan (LK) heuristic for optimization when the number of destinations is small (design intent: below 10), and switch to the Nearest Neighbor (NN) approximation for larger destination sets (design intent: 10 or more). This balances solution quality and performance for both quick day trips and multi-day vacation planning. Built with modern web technologies and Mapbox-powered distances, Trekzen helps travelers discover, plan, and navigate optimized tours across Kerala.

## 🚀 Key Features

- **Quick Planner**: Single-day trip optimization with intelligent route planning
- **Vacation Planner**: Multi-day itinerary management with day-by-day optimization
- **Interactive Maps**: Real-time mapping with Leaflet.js integration
- **Route Optimization**: Advanced algorithms for minimizing travel time and distance
- **User Authentication**: Secure Firebase-based authentication system
- **Business Management**: Tools for local businesses to manage their listings
- **Place Management**: Admin tools for adding and managing tourist destinations

## 🛠️ Technology Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **Firebase** - Authentication and database services
- **Mapbox API** - Geocoding and routing services
- **CSV Parser** - Data processing for location information

### Frontend
- **HTML5** - Markup structure
- **CSS3** - Styling and responsive design
- **JavaScript (ES6+)** - Client-side functionality
- **Bootstrap 5** - UI framework and responsive components
- **Leaflet.js** - Interactive mapping library
- **Leaflet Routing Machine** - Route visualization
- **PapaParse** - CSV data parsing

### Dependencies
```json
{
  "cors": "^2.8.5",
  "csv-parser": "^3.0.0", 
  "express": "^4.18.3",
  "firebase": "^10.11.0",
  "http-proxy-middleware": "^2.0.6",
  "leaflet-routing-machine": "^3.2.12",
  "node-fetch": "^3.3.2"
}
```

## 📁 Project Structure

```
Trekzen /
├── AdminPage/                    # Administrative interface
│   ├── adminpage.html           # Admin dashboard
│   ├── adminpage.js             # Admin functionality
│   ├── adminsignin.html         # Admin login page (entry)
│   ├── adminsignup.html         # Admin registration
│   └── README.md                # Admin docs
├── Homepage/                    # Landing page and public interface
│   ├── home.html                # Main homepage
│   ├── css/                     # Stylesheets and animations
│   ├── js/                      # Frontend JavaScript modules
│   └── fonts/                   # Custom fonts and icons
├── Loginpage/                   # User authentication
│   ├── user_login.html          # User login
│   ├── user_signup_page.html    # User registration
│   └── cascade/                 # Auth stylesheets
├── Mainpage/                    # Core application functionality
│   ├── components/              # Feature modules
│   │   ├── user_home.html       # User home/dashboard
│   │   ├── profile/             # Profile pages
│   │   │   └── profile.html
│   │   ├── quick_planner/       # Single-day trip planning
│   │   │   ├── quickplan.html
│   │   │   ├── selected_destinations.json
│   │   │   ├── distance.json
│   │   │   ├── matrix.json
│   │   │   ├── ordered_places.json
│   │   │   └── result.json
│   │   ├── vacation_planner/    # Multi-day trip planning
│   │   │   ├── vacationplan.html
│   │   │   ├── days.json
│   │   │   ├── distance_days.json
│   │   │   ├── days_matrix.json
│   │   │   ├── ordered.json
│   │   │   └── vacresult.json
│   │   ├── add_destination/     # Add Destinations Contribution flows
│   │   │   ├── add_bussiness/
│   │   │   │   ├── addbussiness.html
│   │   │   │   └── bussiness.html
│   │   │   └── add_place/
│   │   │       ├── addplace.html
│   │   │       └── place.html
│   │   ├── preset/              # Preset itineraries (e.g., Kodaikanal, Vagamon)
│   │   │   ├── preset1.html     # Preset route 1
│   │   │   ├── preset2.html     # Preset route 2
│   │   │   └── preset3.html     # Preset route 3
│   ├── js/                      # App logic (modules)
│   │   ├── quick_planner/
│   │   ├── vacation_planner/
│   │   ├── preset/
│   │   ├── profile/
│   │   └── main.js
│   ├── css/                     # App styles
│   ├── cities.csv               # Location database (2k+ entries)
│   └── Kerala.geojson           # Geographic boundary data
├── images/                      # Static assets
│   ├── avatars/                 # User profile images
│   ├── icons/                   # Application icons
│   ├── login_page/              # Authentication UI assets
│   ├── main_page/               # Main application images
│   └── map/                     # Mapping interface assets
├── server.js                    # Main server application - Express server (serves static + APIs)
├── package.json                 # Project dependencies
├── package-lock.json            # Lockfile
└── README.md                    # Project documentation
```

## 🔧 Core Components

### Quick Planner (`/Mainpage/components/quick_planner/`)

**Purpose**: Optimizes single-day travel routes for maximum efficiency and minimal travel time.

**Algorithm Strategy**:
- Uses the hybrid TSP approach: **LK** for <10 destinations, **NN** for ≥10 (configurable threshold).
- Distance matrix is built from Mapbox Directions API responses.

**Key Files**:
- `quickplan.html` - User interface for quick trip planning
- `selected_destinations.json` - Stores user-selected destinations with coordinates
- `distance.json` - Calculated distances between destination pairs
- `matrix.json` - Distance matrix for algorithm processing
- `ordered_places.json` - Optimized route order with total distance
- `result.json` - Algorithm execution results

**Functionality**:
- Interactive destination selection with map visualization
- Real-time distance calculation using Mapbox API
- LK/NN-based route optimization with distance matrix input
- Visual route display with markers and path visualization

### Vacation Planner (`/Mainpage/components/vacation_planner/`)

**Purpose**: Manages multi-day vacation itineraries with day-by-day optimization.

**Algorithm Strategy**:
- Applies the same hybrid TSP approach per day: **LK** for <10 places, **NN** for ≥10 (configurable).
- Builds a per-day distance matrix; optimizes each day independently and aggregates results.

**Key Files**:
- `vacation.html` - User interface for vacation planning
- `days.json` - Daily itinerary data with places visited per day
- `distance_days.json` - Distance calculations for each day's route
- `days_matrix.json` - Distance matrices for daily optimization
- `ordered.json` - Complete vacation route with day-wise organization
- `vacresult.json` - Vacation planning algorithm results

**Functionality**:
- Multi-day trip planning with flexible day allocation
- Per-day LK/NN optimization with Mapbox-based distances
- Comprehensive vacation itinerary management
- Total distance and time calculations across all days

### Add Place (`/Mainpage/components/add_place/`)

**Purpose**: Enable admins or authorized users to add new tourist places to the platform’s database and manage metadata.

**Key Files**:
- `addplace.html` - Form interface to create a new place with district, category, name, and coordinates.
- `addplace_main.html` - Listing/management view to review and curate newly added places.

**Functionality**:
- Validated form inputs for district, categories (place/tourist/hotels/facilities), coordinates.
- Adds entries aligned to `cities.csv` schema for unified querying and mapping.
- Supports future moderation workflows.

### Add Business (`/Mainpage/components/add_bussiness/`)

**Purpose**: Allow local businesses (hotels, facilities, tourist services) to submit and manage listings visible within planning flows.

**Key Files**:
- `bussiness.html` - Primary submission and management interface for business listings.
- `bussiness1.html` - Alternative/legacy layout for business onboarding.

**Functionality**:
- Business details capture (name, type, location, contact).
- Integrates with category filters used across planners.
- Prepares data for map display and discovery.

### Preset Itineraries (`/Mainpage/components/preset/`)

**Purpose**: Provide curated, ready-to-use itineraries for common travel themes, enabling one-click planning.

**Key Files**:
- `preset1.html`, `preset2.html`, `preset3.html` - Curated itinerary pages.
- Related logic in `Mainpage/js/preset1.js`, `preset2.js`, `preset3.js` for interactions.

**Functionality**:
- Pre-filled destinations and flows that users can adopt or tweak.
- Works with the same optimization and mapping stack used by planners.

Deployment (Render)
--------------------

1) Create a new Web Service
   - Build Command: (leave empty for Node)
   - Start Command: `node server.js`
   - Environment: `NODE_VERSION` (optional)

2) Environment variables
   - `PORT` is provided by Render automatically.

3) Notes
   - The server serves static files and API under the same origin; client scripts call APIs with relative paths.
   - For local dev, run `npm start` and open `http://localhost:3000`.

## Admin Interface
- Purpose: moderation and approval of user-contributed content.
  - In the main app (`/Mainpage`), normal users can propose new Places and Businesses via `Mainpage/components/add_destination/` (both `add_place` and `add_bussiness`). These submissions enter a pending/approval state.
  - The Admin app (`/AdminPage`) lists all pending submissions so admins can review and approve/reject them. This prevents fake or low‑quality entries while leveraging community contributions for coverage of new places and businesses.
- Open the admin UI at:
  - Local: `http://localhost:3000/AdminPage`
  - Render: `<your-render-url>/AdminPage`
- For detailed admin docs, see `AdminPage/README.md`.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Mapbox API key
- Firebase project configuration

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abin-28/Trekzen_Major-Project.git
   cd Trekzen_Major-Project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   - Update Mapbox API key in `server.js` (line 51)
   - Configure Firebase credentials in the application
   - Ensure `cities.csv` contains your location data

4. **Start the server**
   ```bash
   node server.js
   ```

5. **Access the application**
   - Local development: `http://localhost:3000`
   - Production (Render): Use your Render service URL. All API calls use relative paths, so no code changes are needed when deploying.
   - Network access: `http://[YOUR_IP]:3000`
   - Production: `https://trekzen11.glitch.me`

### Network Setup
1. Run `ipconfig` (Windows) or `ifconfig` (Linux/Mac) to get your IPv4 address
2. Access the application using `http://[YOUR_IP]:3000` from any device on the same network

## 📊 Data Management

### Regenerated Files

The application dynamically generates several JSON files during operation:

#### Quick Planner Files:
- `selected_destinations.json` - Updated when users select destinations
- `distance.json` - Regenerated with each new destination selection
- `matrix.json` - Recalculated for algorithm processing
- `ordered_places.json` - Generated after route optimization
- `result.json` - Created after algorithm execution

#### Vacation Planner Files:
- `days.json` - Updated for each day's itinerary
- `distance_days.json` - Regenerated for daily distance calculations
- `days_matrix.json` - Recalculated for each day's optimization
- `ordered.json` - Generated for complete vacation route
- `vacresult.json` - Created after vacation algorithm execution

### Data Sources
- **cities.csv**: Contains 2133+ locations across Kerala with coordinates
- **Kerala.geojson**: Geographic boundary data for mapping
- **Mapbox API**: Real-time distance and routing calculations

## 🔄 API Endpoints

### Core Endpoints
- `POST /saveDestinations` - Save selected destinations for quick planning
- `POST /saveDestinationsByDay` - Save destinations for specific vacation days
- `POST /executeAlgorithm` - Execute quick planner optimization
- `POST /executeVacationAlgorithm` - Execute vacation planner optimization
- `PUT /emptySelectedDestinationsFile` - Clear quick planner data
- `PUT /emptydaysFile` - Clear vacation planner data
- `POST /emptyOrderedJson` - Reset vacation route data

## 🎯 Algorithm Features

### Algorithm Strategy & Rationale
- Core problem: model routing as a **TSP** over selected destinations.
- Research-driven choice:
  - **Lin–Kernighan (LK)**: high-quality solutions via powerful k-opt edge exchanges; excellent for small/medium sets.
  - **Nearest Neighbor (NN)**: very fast approximation that scales to larger sets with acceptable quality.
- Switching rule (design intent): **use LK when destinations < 20; use NN when destinations ≥ 20**.
- Distances: populated from **Mapbox Directions API**, stored in JSON, then assembled into a symmetric distance matrix.

### Current Implementation Notes
- The threshold is configurable in code:
  - Quick Planner: `Mainpage/js/quickplan_algorithm.js` 
  - Vacation Planner: `Mainpage/js/vacationplan_algorithm.js`
- Pipeline:
  - Compute pairwise distances → build matrix → select algorithm via threshold → write results to `result.json`/`vacresult.json` → generate ordered routes (`ordered_places.json`/`ordered.json`).

### Mapping Integration
- Interactive Leaflet.js maps
- Real-time marker placement
- Route visualization with turn-by-turn directions
- Cluster management for multiple destinations

## 🔐 Authentication & Security

- Firebase Authentication integration
- User session management
- Admin panel access control
- Secure API endpoint protection

