const validatePassword = (password) => {
    const errors = [];
    const suggestions = [];
    let score = 100;

    const commonPasswords = [
        "password",
        "123456",
        "qwerty",
        "admin",
        "letmein"
    ];

    const rules = [
        {
            check: password.length >= 8,
            error: "Too short (minimum 8 characters)",
            suggestion: "Use at least 8 characters",
            penalty: 20
        },
        {
            check: /[A-Z]/.test(password),
            error: "No uppercase letter",
            suggestion: "Add at least one uppercase letter",
            penalty: 15
        },
        {
            check: /[a-z]/.test(password),
            error: "No lowercase letter",
            suggestion: "Add at least one lowercase letter",
            penalty: 15
        },
        {
            check: /[0-9]/.test(password),
            error: "No number",
            suggestion: "Add at least one number",
            penalty: 15
        },
        {
            check: /[!@#$%^&*()_+\-=]/.test(password),
            error: "No special character",
            suggestion: "Add at least one special character",
            penalty: 15
        }
    ];

    rules.forEach(rule => {
        if (!rule.check) {
            errors.push(rule.error);
            suggestions.push(rule.suggestion);
            score -= rule.penalty;
        }
    });

    if (commonPasswords.includes(password.toLowerCase())) {
        errors.push("Common password used");
        suggestions.push(`Avoid common passwords like "${password}"`);
        score -= 30;
    }

    score = Math.max(score, 0);

    return {
        isValid: errors.length === 0 && score >= 70,
        score,
        errors,
        suggestions
    };
};

console.log(validatePassword("qwerty"));
console.log(validatePassword("MyPassword@123"));
