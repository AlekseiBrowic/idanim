LogicalExpression: ($, n) => 
    n.operator === '&&' 
        ? $(n.left) && $(n.right) 
        : $(n.left) || $(n.right),
