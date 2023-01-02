import React from "react";

const Footer = () => {
	return (
		<div className="bg-[#1E282D]  mt-5">
			<footer class="  text-white mx-28">
				<div class="grid grid-cols-2  py-8 px-6 md:grid-cols-4 mx-20 gap-20">
					<div>
						<h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
							Company
						</h2>
						<ul class="text-white dark:text-white">
							<li class="mb-4">
								<a href="#" class=" hover:underline">
									About
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Careers
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Brand Center
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Blog
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 class="mb-6 text-sm font-semibold  uppercase text-white">
							Help center
						</h2>
						<ul class=" text-white">
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Discord Server
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Twitter
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Facebook
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Contact Us
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 class="mb-6 text-sm font-semibold  uppercase text-white">
							Legal
						</h2>
						<ul class=" text-white">
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Privacy Policy
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Licensing
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Terms &amp; Conditions
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 class="mb-6 text-sm font-semibold  uppercase text-white">
							Download
						</h2>
						<ul class=" text-white">
							<li class="mb-4">
								<a href="#" class="hover:underline">
									iOS
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Android
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									Windows
								</a>
							</li>
							<li class="mb-4">
								<a href="#" class="hover:underline">
									MacOS
								</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
