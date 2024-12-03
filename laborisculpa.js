/**
 * Checks if the provided field definition object is an operation field definition.
 *
 * @param {Object} fieldDef - The field definition object to check.
 * @returns {boolean} - True if the field definition is an operation field definition, false otherwise.
 */
function isOpFieldDef(fieldDef) {
    // Example criteria: fieldDef must have a 'type' property set to 'operation'
    return fieldDef && typeof fieldDef === 'object' && fieldDef.type === 'operation';
}

// Example usage:
const exampleFieldDef = {
    name: 'sum',
    type: 'operation',
    description: 'Calculates the sum of two numbers'
};

console.log(isOpFieldDef(exampleFieldDef));  // Output: true

const anotherFieldDef = {
    name: 'age',
    type: 'number',
    description: 'The age of a person'
};

console.log(isOpFieldDef(anotherFieldDef));  // Output: false
