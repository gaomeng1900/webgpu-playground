export {}

const adapter = (await navigator.gpu.requestAdapter())!

l(adapter)

adapter.features.forEach((k) => l('feature', k))

const device = await adapter.requestDevice({ label: 'haha' })

device.lost.then(() => l('device lost'))

l(device)

device.features.forEach((k) => l('feature', k))

//

function l(...args) {
	console.log(...args)
}
