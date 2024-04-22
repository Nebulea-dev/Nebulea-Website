/** @type {import('next').NextConfig} */
const nextConfig = {
	distDir: 'build',
	async rewrites() {
		return [
			{
				source: "/godot/Phelmattack",
				destination: `/godot/Phelmattack.html`,
			},
		];
	},
};

export default nextConfig;
