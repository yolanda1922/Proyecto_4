export class User {
  constructor(id, name, email, age) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.age = age;
    this.createdAt = new Date().toISOString();
  }

  // Validar datos del usuario
  static validate(userData) {
    const errors = [];
    
    if (!userData.name || userData.name.trim().length < 2) {
      errors.push('El nombre debe tener al menos 2 caracteres');
    }
    
    if (!userData.email || !this.isValidEmail(userData.email)) {
      errors.push('El email no es válido');
    }
    
    if (!userData.age || userData.age < 0 || userData.age > 120) {
      errors.push('La edad debe estar entre 0 y 120 años');
    }
    
    return errors;
  }

  static isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
