(function factorial(n) {
    if (n <= 1) return 1;
    console.log(n);
    factorial(n - 1); // ✅ works because name is local
})(5);