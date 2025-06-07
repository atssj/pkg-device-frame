# Device Frame NPM Package - Project Plan

**Project**: Device Frame NPM Package Implementation  
**Source**: `BitBucket\prj-device-frames` (Svelte application with device frame components)  
**Target**: `Github\pkg-device-frame` (Multi-framework npm package)  
**Created**: June 7, 2025  
**Last Updated**: June 7, 2025

## Project Overview

This project aims to implement a comprehensive npm package that provides device frame components (mobile, tablet, desktop) for multiple frontend frameworks. The package will be based on the existing Svelte implementation from the BitBucket project and expanded to support React, Vue, and provide a core utilities package.

## Progress Tracker

### Overall Progress: 0% Complete

| Phase       | Component                         | Status         | Progress | Assignee | Due Date | Notes                               |
| ----------- | --------------------------------- | -------------- | -------- | -------- | -------- | ----------------------------------- |
| **Phase 1** | **Core Package Setup**            | 🔴 Not Started | 0%       | -        | -        | -                                   |
| 1.1         | Extract core types and utilities  | 🔴 Not Started | 0%       | -        | -        | Device types, dimensions, constants |
| 1.2         | Create shared styling utilities   | 🔴 Not Started | 0%       | -        | -        | CSS classes, animations             |
| 1.3         | Setup core package configuration  | 🔴 Not Started | 0%       | -        | -        | package.json, build config          |
| **Phase 2** | **Svelte Package Implementation** | 🔴 Not Started | 0%       | -        | -        | -                                   |
| 2.1         | Port DevicePreview component      | 🔴 Not Started | 0%       | -        | -        | Main wrapper component              |
| 2.2         | Port DeviceSwitcher component     | 🔴 Not Started | 0%       | -        | -        | Device selection UI                 |
| 2.3         | Port MobileFrame component        | 🔴 Not Started | 0%       | -        | -        | iPhone-style frame                  |
| 2.4         | Port TabletFrame component        | 🔴 Not Started | 0%       | -        | -        | iPad-style frame                    |
| 2.5         | Port DesktopFrame component       | 🔴 Not Started | 0%       | -        | -        | MacBook-style frame                 |
| 2.6         | Update package dependencies       | 🔴 Not Started | 0%       | -        | -        | Tailwind, Lucide Svelte             |
| 2.7         | Configure build system            | 🔴 Not Started | 0%       | -        | -        | Vite config for library             |
| 2.8         | Setup package exports             | 🔴 Not Started | 0%       | -        | -        | Entry points, types                 |
| **Phase 3** | **React Package Implementation**  | 🔴 Not Started | 0%       | -        | -        | -                                   |
| 3.1         | Create React DevicePreview        | 🔴 Not Started | 0%       | -        | -        | Convert from Svelte                 |
| 3.2         | Create React DeviceSwitcher       | 🔴 Not Started | 0%       | -        | -        | React hooks for state               |
| 3.3         | Create React MobileFrame          | 🔴 Not Started | 0%       | -        | -        | JSX implementation                  |
| 3.4         | Create React TabletFrame          | 🔴 Not Started | 0%       | -        | -        | JSX implementation                  |
| 3.5         | Create React DesktopFrame         | 🔴 Not Started | 0%       | -        | -        | JSX implementation                  |
| 3.6         | Setup React dependencies          | 🔴 Not Started | 0%       | -        | -        | Lucide React, types                 |
| 3.7         | Configure React build             | 🔴 Not Started | 0%       | -        | -        | React-specific config               |
| **Phase 4** | **Vue Package Implementation**    | 🔴 Not Started | 0%       | -        | -        | -                                   |
| 4.1         | Create Vue DevicePreview          | 🔴 Not Started | 0%       | -        | -        | Composition API                     |
| 4.2         | Create Vue DeviceSwitcher         | 🔴 Not Started | 0%       | -        | -        | Vue reactive state                  |
| 4.3         | Create Vue MobileFrame            | 🔴 Not Started | 0%       | -        | -        | Vue 3 template                      |
| 4.4         | Create Vue TabletFrame            | 🔴 Not Started | 0%       | -        | -        | Vue 3 template                      |
| 4.5         | Create Vue DesktopFrame           | 🔴 Not Started | 0%       | -        | -        | Vue 3 template                      |
| 4.6         | Setup Vue dependencies            | 🔴 Not Started | 0%       | -        | -        | Lucide Vue Next                     |
| 4.7         | Configure Vue build               | 🔴 Not Started | 0%       | -        | -        | Vue-specific config                 |
| **Phase 5** | **Package Publishing Setup**      | 🔴 Not Started | 0%       | -        | -        | -                                   |
| 5.1         | Configure root package            | 🔴 Not Started | 0%       | -        | -        | Workspaces, scripts                 |
| 5.2         | Setup build pipeline              | 🔴 Not Started | 0%       | -        | -        | All packages build                  |
| 5.3         | Create documentation              | 🔴 Not Started | 0%       | -        | -        | README, examples                    |
| 5.4         | Add component tests               | 🔴 Not Started | 0%       | -        | -        | Framework-specific tests            |
| 5.5         | Setup linting/formatting          | 🔴 Not Started | 0%       | -        | -        | ESLint, Prettier                    |
| 5.6         | Create example apps               | 🔴 Not Started | 0%       | -        | -        | Demo for each framework             |
| 5.7         | Publishing workflow               | 🔴 Not Started | 0%       | -        | -        | NPM publish automation              |

### Status Legend

- 🔴 Not Started
- 🟡 In Progress
- 🟢 Completed
- 🔵 Blocked
- ⚪ Skipped

## Current State Analysis

### BitBucket Source Project

- **Technology**: Svelte 5 + TypeScript + Tailwind CSS
- **Components Available**:
  - `DevicePreview.svelte` - Main wrapper with device switching logic
  - `DeviceSwitcher.svelte` - UI for selecting device types
  - `MobileFrame.svelte` - iPhone-style frame with status bar and home indicator
  - `TabletFrame.svelte` - iPad-style frame with home button
  - `DesktopFrame.svelte` - MacBook-style frame with 3D tilt effect
- **Dependencies**: `lucide-svelte` for icons, Tailwind for styling
- **Features**: Responsive design, dark mode support, smooth transitions

### GitHub Target Project

- **Structure**: Multi-framework npm package with monorepo setup
- **Packages**: `core`, `react`, `svelte`, `vue`
- **Current State**: Basic boilerplate, missing actual implementations
- **Build System**: Bun + TypeScript setup ready

## Technical Architecture

### Package Structure

```
pkg-device-frame/
├── packages/
│   ├── core/           # Shared utilities and types
│   ├── react/          # React components
│   ├── svelte/         # Svelte components
│   └── vue/            # Vue components
├── docs/               # Documentation
├── examples/           # Example applications
└── tools/              # Build and development tools
```

### Core Package (`packages/core/`)

**Purpose**: Shared utilities, types, and constants

**Contents**:

- Device type definitions (`DeviceType`, `DeviceConfig`)
- Dimension constants and aspect ratios
- Shared CSS utilities and animations
- Common styling functions
- TypeScript type definitions

### Framework Packages

Each framework package (`react/`, `svelte/`, `vue/`) will contain:

- Framework-specific component implementations
- Proper build configuration for library output
- TypeScript declaration files
- Framework-specific examples

## Key Technical Considerations

### 1. Styling Strategy

- **Approach**: Extract Tailwind classes to shared CSS file in core package
- **Consistency**: Ensure identical visual output across all frameworks
- **Dark Mode**: Consistent dark mode support using CSS variables
- **Responsive**: Mobile-first responsive design principles

### 2. State Management

- **Svelte**: Native Svelte stores and reactive variables
- **React**: React hooks (`useState`, `useEffect`) and context
- **Vue**: Composition API with `ref` and `reactive`
- **Events**: Custom events for device switching in all frameworks

### 3. Icon Dependencies

- **Svelte**: `lucide-svelte`
- **React**: `lucide-react`
- **Vue**: `lucide-vue-next`
- **Consistency**: Same icon set across all frameworks

### 4. TypeScript Support

- **Core Types**: Shared in core package
- **Framework Types**: Framework-specific type definitions
- **Build Output**: Generate `.d.ts` files for all packages
- **Type Safety**: Full TypeScript support for all components

### 5. Build System

- **Tool**: Vite for all packages (consistent build experience)
- **Output Formats**: ESM and CommonJS for maximum compatibility
- **Bundle Optimization**: Tree-shaking friendly exports
- **Development**: Hot reload for all frameworks

## Component Specifications

### DevicePreview

**Purpose**: Main wrapper component that orchestrates device switching

**Props**:

- `initialDevice?: DeviceType` - Starting device type
- `currentDevice?: DeviceType` - Controlled device state
- `onDeviceChange?: (device: DeviceType) => void` - Device change callback

**Features**:

- Smooth transitions between device types
- Responsive sizing and positioning
- Slot/children support for content

### DeviceSwitcher

**Purpose**: UI component for selecting device types

**Props**:

- `currentDevice: DeviceType` - Currently selected device
- `onDeviceChange: (device: DeviceType) => void` - Selection callback
- `disabled?: boolean` - Disable interactions

**Features**:

- Icon-based device selection
- Keyboard navigation support
- Accessibility compliance

### Device Frames (Mobile, Tablet, Desktop)

**Purpose**: Visual device frames with realistic styling

**Common Props**:

- `children/slot` - Content to display in frame
- `className?: string` - Additional CSS classes

**Frame-Specific Features**:

- **Mobile**: iPhone-style with notch, status bar, home indicator
- **Tablet**: iPad-style with home button, status bar
- **Desktop**: MacBook-style with 3D tilt, browser chrome, webcam

## Quality Assurance

### Testing Strategy

- **Unit Tests**: Component rendering and prop handling
- **Integration Tests**: Device switching functionality
- **Visual Tests**: Screenshot testing for consistent appearance
- **Accessibility Tests**: ARIA compliance and keyboard navigation

### Code Quality

- **Linting**: ESLint with framework-specific rules
- **Formatting**: Prettier for consistent code style
- **Type Checking**: Strict TypeScript configuration
- **Pre-commit Hooks**: Automated quality checks

## Documentation Plan

### 1. Package Documentation

- Installation and setup guides
- API reference for all components
- Framework-specific usage examples
- Migration guides from other solutions

### 2. Example Applications

- Basic usage examples for each framework
- Advanced customization demos
- Integration with popular tools (Storybook, etc.)
- Performance optimization examples

### 3. Contributing Guide

- Development setup instructions
- Component development guidelines
- Testing requirements
- Pull request process

## Deployment and Publishing

### NPM Publishing

- **Scope**: Publish under consistent naming convention
- **Versioning**: Semantic versioning across all packages
- **Automation**: GitHub Actions for automated publishing
- **Registry**: NPM public registry

### CI/CD Pipeline

- **Build**: Automated builds for all packages
- **Test**: Run all test suites
- **Lint**: Code quality checks
- **Publish**: Automated publishing on release tags

## Risk Assessment

### Technical Risks

- **Framework Compatibility**: Different framework versions may require adjustments
- **Styling Consistency**: Ensuring identical appearance across frameworks
- **Bundle Size**: Managing package size for performance

### Mitigation Strategies

- Regular testing with latest framework versions
- Comprehensive visual regression testing
- Bundle analysis and optimization
- Peer dependency management

## Success Metrics

### Development Metrics

- [ ] All 5 phases completed on schedule
- [ ] 100% TypeScript coverage
- [ ] All tests passing across frameworks
- [ ] Documentation complete and reviewed

### Quality Metrics

- [ ] Visual consistency verified across frameworks
- [ ] Performance benchmarks met
- [ ] Accessibility compliance achieved
- [ ] Zero critical security vulnerabilities

### Adoption Metrics

- [ ] NPM packages published successfully
- [ ] Example applications deployed
- [ ] Community feedback incorporated
- [ ] Usage documentation complete

## Next Steps

1. **Immediate**: Begin Phase 1 (Core Package Setup)
2. **Week 1**: Complete Svelte package implementation
3. **Week 2**: Implement React package
4. **Week 3**: Implement Vue package
5. **Week 4**: Final testing, documentation, and publishing

---

**Last Updated**: June 7, 2025  
**Next Review**: Weekly progress reviews  
**Contact**: Project maintainer for questions and updates
