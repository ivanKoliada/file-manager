import init from './app.js';
import { error } from './modules/handlers/errorHandler.js';

try {
  init();
} catch (err) {
  if (err) error();
}
