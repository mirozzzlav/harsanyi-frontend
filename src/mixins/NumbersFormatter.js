export default {
    methods: {
        formatEuro: function(price) {
            let numFormatter = new Intl.NumberFormat('sk', {
                style: 'currency',
                currency: 'EUR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            })
            
            return numFormatter.format(price);
        },
        formatDecimal: function(val) {
            let numFormatter = new Intl.NumberFormat('sk', {
                style: 'decimal',
                useGrouping: true
            });
            return numFormatter.format(val);
        }
    }
    
}

