// Напишите валидационный скрипт используя функции 

// 1. Скрипт должен на вход принимать строку.
// 2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
// 3. Минимум 5 символов в строке
// 4. Максимум 64 символа в строке
// 5. В строке должны быть буквы
// 6. Должна быть хотя бы одна буква в верхнем регистре
// 7. Должна быть хотя бы одна цифра
// 8. Должна быть хотя бы одна @
// 9. Строка не должна быть пустой
function checkString(str){
        if (typeof str == 'string'){
        console.log('String accepted')
                if (str.length < 5){
                console.log('There must be at least 5 symbols')
                } else {console.log('String accepted')}
                if (str.length > 64){
                console.log('There must be less than 64 symbols')
                } else {console.log('String accepted')}
                if (!/[a-zA-Z]/.test(str)){
                console.log('There must be letters')
                } else {console.log('String accepted')}
                if (!/.*[A-Z].*/.test(str)){
                console.log('There must be at least one letter in upper case')
                } else {console.log('String accepted')}
                if (!/.*\d.*/.test(str)){
                console.log('There must be at least one digit')
                } else {console.log('String accepted')}
                if (!/.*[@].*/.test(str)){
                console.log('There must be at least one @')
                } else {console.log('String accepted')}
                if (str.length == 0){
                console.log('String must not be empty')
                } else {console.log('String accepted')}
        } else {
        console.log('Error! Please enter string value')
        }
}
checkString('  @1A')