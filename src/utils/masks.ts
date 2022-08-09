export function normalizePhonenumber(e: React.FormEvent<HTMLInputElement>) {
    if (!e) return '';
    
    e.currentTarget.maxLength = 15;
    let value = e.currentTarget.value;
    value = value.replace(/[\D]/g, '')
    value = value.replace(/(\d{2})(\d)/, '($1) $2')
    value = value.replace(/(\d{5})(\d)/, '$1-$2')
    value = value.replace(/(-\d{4})(\d+?)/, '$1');
    e.currentTarget.value = value;
    return e;
}

export function cep(e: React.FormEvent<HTMLInputElement>) {
    if (!e) return '';

    e.currentTarget.maxLength = 9;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    e.currentTarget.value = value;
    return e;
}

export function currency(e: React.FormEvent<HTMLInputElement>) {
    if (!e) return '';

    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
    e.currentTarget.value = value;
    return e;
}

export function cnpj(e: React.FormEvent<HTMLInputElement>){
    if (!e) return '';

    e.currentTarget.maxLength = 14;
    let value = e.currentTarget.value;
    value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    e.currentTarget.value = value;
    return e;
}