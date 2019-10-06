import ISchool from './ISchool';

export const school: ISchool = {
    name: 'Hillel',
    executive: 'Misha',
    courses: [
        {
            id: 10,
            courseName: 'Javascript basic',
            price: 5400,
            description: 'JavaScript, often abbreviated as JS, is a high-level, interpreted scripting language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'
        },
        {
            id: 12,
            courseName: 'Javascript Pro',
            price: 6400,
            description: 'In November 1996, Netscape submitted JavaScript to ECMA International to carve out a standard specification, which other browser vendors could then implement based on the work done at Netscape'
        },
        {
            id: 2,
            courseName: 'Python',
            price: 6400,
            description: 'Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python\'s design philosophy emphasizes code readability with its notable use of significant whitespace.'
        },
        {
            id: 54,
            courseName: 'Php',
            price: 5400,
            description: 'PHP: Hypertext Preprocessor is a general-purpose programming language originally designed for web development. It was originally created by Rasmus Lerdorf in 1994; the PHP reference implementation is now produced by The PHP Group.'
        }
    ]
}