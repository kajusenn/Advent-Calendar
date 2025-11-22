const windows = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    opened: false,
}))

module.exports = windows;