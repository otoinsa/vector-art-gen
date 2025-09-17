# Next Agent TODO List

## 🚀 **High Priority - Code Restructuring & Organization**

### 📁 **Directory Structure Reorganization**
- [ ] **Move web assets to `/dist` folder**
  - Move `index.html`, `styles.css`, `app.js`, `sketch.js` to `/dist/`
  - Update file paths and references
  - Ensure server.py serves from `/dist` directory
  
- [ ] **Create proper source structure**
  - `/src/` - Source files before build
  - `/dist/` - Distribution/build output
  - `/assets/` - Static assets (images, icons)
  - `/docs/` - Documentation files
  
- [ ] **Organize JavaScript modules**
  - Split `app.js` into smaller modules:
    - `/src/patterns/` - Pattern generation functions
    - `/src/exports/` - SVG, G-code, PDF export functions
    - `/src/ui/` - UI control handlers
    - `/src/utils/` - Utility functions
  
- [ ] **Update build process**
  - Create build script to combine modules into `/dist/`
  - Update `server.py` to serve from correct directory
  - Ensure all file references work after restructuring

### 🛠️ **Code Organization Improvements**

- [ ] **Modularize pattern generation**
  - Extract each pattern (spiral, galaxy, nebula, etc.) into separate files
  - Create base pattern class/interface
  - Implement consistent parameter handling across patterns
  
- [ ] **Separate export functionality**
  - `/src/exports/svg.js` - SVG generation functions
  - `/src/exports/gcode.js` - G-code generation functions  
  - `/src/exports/pdf.js` - PDF export functions
  - Create unified export interface

- [ ] **UI Component Separation**
  - Extract control panel logic into separate module
  - Separate canvas rendering from UI controls
  - Create reusable UI components

### 📦 **Build System Setup**

- [ ] **Add package.json scripts**
  - `npm run build` - Build distribution files
  - `npm run dev` - Development server
  - `npm run clean` - Clean build artifacts
  
- [ ] **Consider bundler integration**
  - Evaluate Webpack, Rollup, or Vite for module bundling
  - Setup development vs production builds
  - Implement code minification and optimization

### 🧪 **Testing Infrastructure**

- [ ] **Add test structure**
  - `/tests/` - Test files
  - Unit tests for pattern generation
  - Integration tests for export functions
  - Visual regression tests for canvas output

### 📚 **Documentation Updates**

- [ ] **Update README.md**
  - Reflect new directory structure
  - Update installation/development instructions
  - Add build process documentation
  
- [ ] **Add developer documentation**
  - Code architecture overview
  - Pattern creation guide
  - Export function documentation
  - Contributing guidelines update

### 🔧 **Configuration Management**

- [ ] **Environment configuration**
  - Separate development and production configs
  - Externalize server settings
  - Create environment-specific builds

### 🎯 **Quality Improvements**

- [ ] **Code linting and formatting**
  - Setup ESLint configuration
  - Add Prettier for code formatting
  - Create pre-commit hooks

- [ ] **Performance optimization**
  - Analyze bundle size
  - Implement code splitting where beneficial
  - Optimize asset loading

## 📋 **Current File Structure to Reorganize**

```
Current:
/
├── index.html
├── styles.css  
├── app.js
├── sketch.js
├── server.py
├── package.json
└── README.md

Target:
/
├── /src/
│   ├── /patterns/
│   ├── /exports/
│   ├── /ui/
│   └── /utils/
├── /dist/
│   ├── index.html
│   ├── styles.css
│   ├── app.min.js
│   └── assets/
├── /tests/
├── /docs/
├── server.py
├── package.json
├── webpack.config.js
└── README.md
```

## ⚠️ **Important Notes**

- **Maintain functionality** - Ensure all features work after restructuring
- **Update file paths** - Fix all relative imports and references  
- **Test thoroughly** - Verify exports (SVG, G-code, PDF) still work correctly
- **Update server.py** - Ensure it serves files from new `/dist/` location
- **Preserve git history** - Use `git mv` for file moves when possible

## 🎯 **Success Criteria**

- [ ] Clean, organized directory structure
- [ ] Modular, maintainable codebase
- [ ] All existing functionality preserved
- [ ] Improved development workflow
- [ ] Better separation of concerns
- [ ] Updated documentation reflecting new structure

---

**Priority**: High - This restructuring will make the codebase much more maintainable and professional, setting up a solid foundation for future development.
