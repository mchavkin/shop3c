export default function mockChat(str) {
    const loweCaseStr = str.toLowerCase()
    const isItThisMock = mock => mock.variants.some(line => loweCaseStr.includes(line))

    const mocks = [
        {
            variants: ['hello', 'glad to see you', 'good morning', 'good evening', 'good afternoon', 'my name is'],
            response: 'Nice to meet you!'
        },
        {
            variants: ['bye', 'so long', 'see you later', 'have a good'],
            response: 'Good Bye'
        },
        {
            variants: ['name', 'call you'],
            response: "I am so young. I don't have a name. But you can call me Tootsie"
        },
        {
            variants: ['search', 'find'],
            response: "There is a search field at the very top of application"
        }
    ]

    const theMock = mocks.find(isItThisMock)
    return theMock ? theMock.response : "I am sorry, I don't know the answer"

}

