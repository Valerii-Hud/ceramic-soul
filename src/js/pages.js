'use strict';

import { promoSection } from './components/Promo';
import { activitiesSection } from './components/Activities';
import { gitSection } from './components/Git';
import { worksSection } from './components/Works';
import { blogSection } from './components/Blog';
import { aboutSection } from './components/About';
import { findSection } from './components/Find';
import { catalogSection } from './components/Catalog';
import { footerSection } from './components/Footer';

export const HOME_PAGE = [
  promoSection,
  activitiesSection,
  gitSection,
  worksSection,
  footerSection,
];

export const BLOG_PAGE = [blogSection, footerSection];

export const ABOUT_PAGE = [
  aboutSection,
  gitSection,
  findSection,
  footerSection,
];

export const CATALOG_PAGE = [catalogSection, footerSection];
