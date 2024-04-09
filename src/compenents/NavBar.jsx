import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand style={{ color: "#256Edc" }} as={Link} to="/">
          {/* <h1>Biupoll</h1> */}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="130"
            zoomAndPan="magnify"
            viewBox="0 0 112.5 60"
            height="70"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <defs>
              <filter x="0%" y="0%" width="100%" height="100%" id="d4a937c4c1">
                <feColorMatrix
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                  color-interpolation-filters="sRGB"
                />
              </filter>
              <g />
              <clipPath id="a530651987">
                <path
                  d="M 7 33 L 50 33 L 50 53 L 7 53 Z M 7 33 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="6af3458a6a">
                <path
                  d="M 49.304688 42.59375 C 49.304688 42.90625 49.269531 43.214844 49.203125 43.523438 C 49.136719 43.835938 49.039062 44.140625 48.90625 44.445312 C 48.773438 44.75 48.609375 45.050781 48.414062 45.347656 C 48.214844 45.648438 47.988281 45.9375 47.730469 46.226562 C 47.46875 46.511719 47.179688 46.792969 46.863281 47.066406 C 46.542969 47.339844 46.195312 47.609375 45.820312 47.867188 C 45.441406 48.125 45.039062 48.375 44.609375 48.613281 C 44.179688 48.855469 43.726562 49.085938 43.246094 49.304688 C 42.769531 49.523438 42.265625 49.730469 41.742188 49.929688 C 41.21875 50.125 40.675781 50.3125 40.113281 50.484375 C 39.550781 50.65625 38.96875 50.816406 38.375 50.960938 C 37.777344 51.109375 37.164062 51.242188 36.539062 51.359375 C 35.914062 51.480469 35.277344 51.585938 34.628906 51.675781 C 33.980469 51.765625 33.324219 51.839844 32.660156 51.902344 C 31.996094 51.960938 31.328125 52.007812 30.652344 52.039062 C 29.980469 52.066406 29.304688 52.082031 28.625 52.082031 C 27.949219 52.082031 27.273438 52.066406 26.601562 52.039062 C 25.925781 52.007812 25.257812 51.960938 24.59375 51.902344 C 23.929688 51.839844 23.273438 51.765625 22.625 51.675781 C 21.976562 51.585938 21.339844 51.480469 20.714844 51.359375 C 20.089844 51.242188 19.476562 51.109375 18.878906 50.960938 C 18.28125 50.816406 17.703125 50.65625 17.140625 50.484375 C 16.574219 50.3125 16.03125 50.125 15.507812 49.929688 C 14.984375 49.730469 14.484375 49.523438 14.007812 49.304688 C 13.527344 49.085938 13.074219 48.855469 12.644531 48.613281 C 12.214844 48.375 11.8125 48.125 11.433594 47.867188 C 11.058594 47.609375 10.710938 47.339844 10.390625 47.066406 C 10.070312 46.792969 9.78125 46.511719 9.523438 46.226562 C 9.265625 45.9375 9.035156 45.648438 8.839844 45.347656 C 8.644531 45.050781 8.480469 44.75 8.347656 44.445312 C 8.214844 44.140625 8.117188 43.835938 8.050781 43.523438 C 7.984375 43.214844 7.949219 42.90625 7.949219 42.59375 C 7.949219 42.285156 7.984375 41.972656 8.050781 41.664062 C 8.117188 41.355469 8.214844 41.046875 8.347656 40.742188 C 8.480469 40.4375 8.644531 40.136719 8.839844 39.839844 C 9.035156 39.542969 9.265625 39.25 9.523438 38.964844 C 9.78125 38.675781 10.070312 38.394531 10.390625 38.121094 C 10.710938 37.847656 11.058594 37.582031 11.433594 37.324219 C 11.8125 37.066406 12.214844 36.816406 12.644531 36.574219 C 13.074219 36.335938 13.527344 36.105469 14.007812 35.886719 C 14.484375 35.667969 14.984375 35.457031 15.507812 35.261719 C 16.03125 35.0625 16.574219 34.878906 17.140625 34.707031 C 17.703125 34.535156 18.28125 34.375 18.878906 34.226562 C 19.476562 34.082031 20.089844 33.949219 20.714844 33.828125 C 21.339844 33.710938 21.976562 33.605469 22.625 33.515625 C 23.273438 33.425781 23.929688 33.351562 24.59375 33.289062 C 25.257812 33.230469 25.925781 33.183594 26.601562 33.152344 C 27.273438 33.121094 27.949219 33.105469 28.625 33.105469 C 29.304688 33.105469 29.980469 33.121094 30.652344 33.152344 C 31.328125 33.183594 31.996094 33.230469 32.660156 33.289062 C 33.324219 33.351562 33.980469 33.425781 34.628906 33.515625 C 35.277344 33.605469 35.914062 33.710938 36.539062 33.828125 C 37.164062 33.949219 37.777344 34.082031 38.375 34.226562 C 38.96875 34.375 39.550781 34.535156 40.113281 34.707031 C 40.675781 34.878906 41.21875 35.0625 41.742188 35.261719 C 42.265625 35.457031 42.769531 35.667969 43.246094 35.886719 C 43.726562 36.105469 44.179688 36.335938 44.609375 36.574219 C 45.039062 36.816406 45.441406 37.066406 45.820312 37.324219 C 46.195312 37.582031 46.542969 37.847656 46.863281 38.121094 C 47.179688 38.394531 47.46875 38.675781 47.730469 38.964844 C 47.988281 39.25 48.214844 39.542969 48.414062 39.839844 C 48.609375 40.136719 48.773438 40.4375 48.90625 40.742188 C 49.039062 41.046875 49.136719 41.355469 49.203125 41.664062 C 49.269531 41.972656 49.304688 42.285156 49.304688 42.59375 Z M 49.304688 42.59375 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <image
                x="0"
                y="0"
                width="54"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAxCAYAAACRQFplAAAABmJLR0QA/wD/AP+gvaeTAAACVklEQVRoge2XbW+CQBCER0VR2///R1tUBLQfutMb1hMFbNImO8mkNSh3D/t2AKH/pcUL71WYV+aleSHrXAFcxC2ADkBj116mOWBrABsApf1PeziCceOE6vAN1uIbrAFwBlCbZ4GOBVsB2IpL88ZMMMIxapRGbAiqBnAy1+OxngdbAtgD2Ik9oMKtkaLmU7FDP1pnB3USH82HsYDFE98pAbwZGL3DLaRGT1OS6Qj0o8VI+Sgd0QfiPQ8AKvv9bLCdQan3GWsEPRzTkWnIaPkoKcx24AFVdo/JYKVteO/A3h2kwiqgbowR81AeqMTtA9FyuZo/8aC53ANbIHU8eouUegQhJP/6KHKjjFiXAaqQajLXaPgwfF0O1tw9sEK8zlihGSGmrcIScG2brJFqRYEVgLW3we0YYVoWU8EWA15mPqu5cGGbY4Qbu3eD/CD3Az23lnpQ98D0dNA5t84N+rPohNTmO/l8te8wDTmjzu4efj1v7msSmB+c6hr5bsUaapFSboPUCHidLZ6AB7G2es4yXVsfwCQwID1pfzyitDZ0s9rd2BS0K+r3c52RNTgEPAusswUIkStybowdkG2ekWK0dEDr73WWcdM+igpa2fWHejSgOwAf6M8fnUG5Y5U/DGuq8uFofQ4dpw7og56fgQLGHYILPD4n+tOCPyv6VxatmdwBWNNvlKa8tiyR0s5Dce7lXluA29M9602blAI+HSGvuS+aPKHkhui9huNr1adlO3NPPxv7DeUGrn/RvODFb82hUCgUCoVCoVAoFAqFQqFQKBQKhf6uvgDbPjqZHAMMNAAAAABJRU5ErkJggg=="
                id="aaa79429cb"
                height="49"
                preserveAspectRatio="xMidYMid meet"
              />
              <mask id="a007a4c1b0">
                <g filter="url(#d4a937c4c1)">
                  <g>
                    <image
                      x="0"
                      y="0"
                      width="54"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAxCAYAAACRQFplAAAABmJLR0QA/wD/AP+gvaeTAAACVklEQVRoge2XbW+CQBCER0VR2///R1tUBLQfutMb1hMFbNImO8mkNSh3D/t2AKH/pcUL71WYV+aleSHrXAFcxC2ADkBj116mOWBrABsApf1PeziCceOE6vAN1uIbrAFwBlCbZ4GOBVsB2IpL88ZMMMIxapRGbAiqBnAy1+OxngdbAtgD2Ik9oMKtkaLmU7FDP1pnB3USH82HsYDFE98pAbwZGL3DLaRGT1OS6Qj0o8VI+Sgd0QfiPQ8AKvv9bLCdQan3GWsEPRzTkWnIaPkoKcx24AFVdo/JYKVteO/A3h2kwiqgbowR81AeqMTtA9FyuZo/8aC53ANbIHU8eouUegQhJP/6KHKjjFiXAaqQajLXaPgwfF0O1tw9sEK8zlihGSGmrcIScG2brJFqRYEVgLW3we0YYVoWU8EWA15mPqu5cGGbY4Qbu3eD/CD3Az23lnpQ98D0dNA5t84N+rPohNTmO/l8te8wDTmjzu4efj1v7msSmB+c6hr5bsUaapFSboPUCHidLZ6AB7G2es4yXVsfwCQwID1pfzyitDZ0s9rd2BS0K+r3c52RNTgEPAusswUIkStybowdkG2ekWK0dEDr73WWcdM+igpa2fWHejSgOwAf6M8fnUG5Y5U/DGuq8uFofQ4dpw7og56fgQLGHYILPD4n+tOCPyv6VxatmdwBWNNvlKa8tiyR0s5Dce7lXluA29M9602blAI+HSGvuS+aPKHkhui9huNr1adlO3NPPxv7DeUGrn/RvODFb82hUCgUCoVCoVAoFAqFQqFQKBQKhf6uvgDbPjqZHAMMNAAAAABJRU5ErkJggg=="
                      height="49"
                      preserveAspectRatio="xMidYMid meet"
                    />
                  </g>
                </g>
              </mask>
              <radialGradient
                gradientTransform="matrix(1.37092, 0, 0, -0.62908, 0.208074, 60.87487)"
                gradientUnits="userSpaceOnUse"
                r="15.149425"
                cx="18.634447"
                id="acf475183a"
                cy="78.853691"
                fx="18.634447"
                fy="78.853691"
              >
                <stop
                  stop-opacity="1"
                  stop-color="rgb(0%, 0%, 0%)"
                  offset="0"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(0%, 0%, 0%)"
                  offset="1"
                />
              </radialGradient>
              <clipPath id="77320f4ba8">
                <rect x="0" width="54" y="0" height="49" />
              </clipPath>
              <pattern
                id="3383dc39fb"
                patternUnits="userSpaceOnUse"
                width="54"
                patternTransform="matrix(0.995575, 0, 0, -0.995575, 2.986726, 53.814159)"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 54 49"
                height="49"
                x="0"
                y="0"
              >
                <g>
                  <g clip-path="url(#77320f4ba8)">
                    <g mask="url(#a007a4c1b0)">
                      <rect
                        x="-27.86"
                        fill="url(#acf475183a)"
                        width="162.72"
                        height="86.784"
                        y="-19.472"
                      />
                    </g>
                  </g>
                </g>
              </pattern>
              <clipPath id="14a6edf158">
                <path
                  d="M 8 7 L 49 7 L 49 48 L 8 48 Z M 8 7 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="7fe382377e">
                <path
                  d="M 48.183594 27.675781 C 48.183594 38.609375 39.296875 47.472656 28.339844 47.472656 C 17.382812 47.472656 8.496094 38.609375 8.496094 27.675781 C 8.496094 16.738281 17.378906 7.878906 28.339844 7.878906 C 39.300781 7.878906 48.183594 16.742188 48.183594 27.675781 Z M 48.183594 27.675781 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <radialGradient
                gradientTransform="matrix(1.001207, 0, 0, 0.998793, 3.193879, 3.696109)"
                gradientUnits="userSpaceOnUse"
                r="30.659124"
                cx="18.652254"
                id="fa10f768e1"
                cy="16.065041"
                fx="18.652254"
                fy="16.065041"
              >
                <stop
                  stop-opacity="1"
                  stop-color="rgb(82.699585%, 91.398621%, 100%)"
                  offset="0"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(82.699585%, 91.398621%, 100%)"
                  offset="0.125"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(82.63855%, 91.349792%, 99.966431%)"
                  offset="0.152344"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(82.388306%, 91.151428%, 99.827576%)"
                  offset="0.15625"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(82.011414%, 90.85083%, 99.61853%)"
                  offset="0.160156"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(81.632996%, 90.548706%, 99.409485%)"
                  offset="0.164062"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(81.254578%, 90.248108%, 99.200439%)"
                  offset="0.167969"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(80.87616%, 89.945984%, 98.99292%)"
                  offset="0.171875"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(80.497742%, 89.645386%, 98.783875%)"
                  offset="0.175781"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(80.12085%, 89.343262%, 98.574829%)"
                  offset="0.179688"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(79.742432%, 89.042664%, 98.365784%)"
                  offset="0.183594"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(79.364014%, 88.74054%, 98.156738%)"
                  offset="0.1875"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(78.985596%, 88.439941%, 97.949219%)"
                  offset="0.191406"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(78.607178%, 88.137817%, 97.740173%)"
                  offset="0.195312"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(78.22876%, 87.837219%, 97.531128%)"
                  offset="0.199219"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(77.851868%, 87.535095%, 97.322083%)"
                  offset="0.203125"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(77.47345%, 87.234497%, 97.113037%)"
                  offset="0.207031"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(77.095032%, 86.932373%, 96.903992%)"
                  offset="0.210938"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(76.716614%, 86.631775%, 96.696472%)"
                  offset="0.214844"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(76.338196%, 86.329651%, 96.487427%)"
                  offset="0.21875"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(75.959778%, 86.029053%, 96.278381%)"
                  offset="0.222656"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(75.582886%, 85.726929%, 96.069336%)"
                  offset="0.226562"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(75.204468%, 85.426331%, 95.860291%)"
                  offset="0.230469"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(74.82605%, 85.124207%, 95.651245%)"
                  offset="0.234375"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(74.447632%, 84.823608%, 95.443726%)"
                  offset="0.238281"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(74.069214%, 84.52301%, 95.23468%)"
                  offset="0.242188"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(73.690796%, 84.220886%, 95.025635%)"
                  offset="0.246094"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(73.313904%, 83.920288%, 94.816589%)"
                  offset="0.25"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(72.935486%, 83.618164%, 94.607544%)"
                  offset="0.253906"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(72.557068%, 83.317566%, 94.400024%)"
                  offset="0.257812"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(72.17865%, 83.015442%, 94.190979%)"
                  offset="0.261719"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(71.800232%, 82.714844%, 93.981934%)"
                  offset="0.265625"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(71.42334%, 82.41272%, 93.772888%)"
                  offset="0.269531"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(71.044922%, 82.112122%, 93.563843%)"
                  offset="0.273438"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(70.666504%, 81.809998%, 93.354797%)"
                  offset="0.277344"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(70.288086%, 81.509399%, 93.147278%)"
                  offset="0.28125"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(69.909668%, 81.207275%, 92.938232%)"
                  offset="0.285156"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(69.53125%, 80.906677%, 92.729187%)"
                  offset="0.289062"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(69.154358%, 80.604553%, 92.520142%)"
                  offset="0.292969"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(68.77594%, 80.303955%, 92.311096%)"
                  offset="0.296875"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(68.397522%, 80.001831%, 92.103577%)"
                  offset="0.300781"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(68.019104%, 79.701233%, 91.894531%)"
                  offset="0.304688"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(67.640686%, 79.399109%, 91.685486%)"
                  offset="0.308594"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(67.262268%, 79.098511%, 91.47644%)"
                  offset="0.3125"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(66.885376%, 78.796387%, 91.267395%)"
                  offset="0.316406"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(66.506958%, 78.495789%, 91.05835%)"
                  offset="0.320312"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(66.12854%, 78.193665%, 90.85083%)"
                  offset="0.324219"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(65.750122%, 77.893066%, 90.641785%)"
                  offset="0.328125"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(65.371704%, 77.590942%, 90.432739%)"
                  offset="0.332031"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(64.994812%, 77.290344%, 90.223694%)"
                  offset="0.335938"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(64.616394%, 76.98822%, 90.014648%)"
                  offset="0.339844"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(64.237976%, 76.687622%, 89.807129%)"
                  offset="0.34375"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(63.859558%, 76.385498%, 89.598083%)"
                  offset="0.347656"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(63.48114%, 76.0849%, 89.389038%)"
                  offset="0.351562"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(63.102722%, 75.782776%, 89.179993%)"
                  offset="0.355469"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(62.72583%, 75.482178%, 88.970947%)"
                  offset="0.359375"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(62.347412%, 75.180054%, 88.761902%)"
                  offset="0.363281"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(61.968994%, 74.879456%, 88.554382%)"
                  offset="0.367188"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(61.590576%, 74.577332%, 88.345337%)"
                  offset="0.371094"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(61.212158%, 74.276733%, 88.136292%)"
                  offset="0.375"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(60.83374%, 73.976135%, 87.927246%)"
                  offset="0.378906"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(60.456848%, 73.674011%, 87.718201%)"
                  offset="0.382812"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(60.07843%, 73.373413%, 87.510681%)"
                  offset="0.386719"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(59.700012%, 73.071289%, 87.301636%)"
                  offset="0.390625"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(59.321594%, 72.770691%, 87.09259%)"
                  offset="0.394531"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(58.943176%, 72.468567%, 86.883545%)"
                  offset="0.398438"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(58.564758%, 72.167969%, 86.6745%)"
                  offset="0.402344"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(58.187866%, 71.865845%, 86.465454%)"
                  offset="0.40625"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(57.809448%, 71.565247%, 86.257935%)"
                  offset="0.410156"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(57.43103%, 71.263123%, 86.048889%)"
                  offset="0.414062"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(57.052612%, 70.962524%, 85.839844%)"
                  offset="0.417969"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(56.674194%, 70.6604%, 85.630798%)"
                  offset="0.421875"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(56.297302%, 70.359802%, 85.421753%)"
                  offset="0.425781"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(55.918884%, 70.057678%, 85.212708%)"
                  offset="0.429688"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(55.540466%, 69.75708%, 85.005188%)"
                  offset="0.433594"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(55.162048%, 69.454956%, 84.796143%)"
                  offset="0.4375"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(54.78363%, 69.154358%, 84.587097%)"
                  offset="0.441406"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(54.405212%, 68.852234%, 84.378052%)"
                  offset="0.445312"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(54.02832%, 68.551636%, 84.169006%)"
                  offset="0.449219"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(53.649902%, 68.249512%, 83.961487%)"
                  offset="0.453125"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(53.271484%, 67.948914%, 83.752441%)"
                  offset="0.457031"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(52.893066%, 67.64679%, 83.543396%)"
                  offset="0.460938"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(52.514648%, 67.346191%, 83.334351%)"
                  offset="0.464844"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(52.13623%, 67.044067%, 83.125305%)"
                  offset="0.46875"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(51.759338%, 66.743469%, 82.91626%)"
                  offset="0.472656"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(51.38092%, 66.441345%, 82.70874%)"
                  offset="0.476562"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(51.002502%, 66.140747%, 82.499695%)"
                  offset="0.480469"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(50.624084%, 65.838623%, 82.290649%)"
                  offset="0.484375"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(50.245667%, 65.538025%, 82.081604%)"
                  offset="0.488281"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(49.867249%, 65.235901%, 81.872559%)"
                  offset="0.492188"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(49.490356%, 64.935303%, 81.665039%)"
                  offset="0.496094"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(49.111938%, 64.633179%, 81.455994%)"
                  offset="0.5"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(48.733521%, 64.332581%, 81.246948%)"
                  offset="0.503906"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(48.355103%, 64.030457%, 81.037903%)"
                  offset="0.507812"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(47.976685%, 63.729858%, 80.828857%)"
                  offset="0.511719"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(47.599792%, 63.42926%, 80.619812%)"
                  offset="0.515625"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(47.221375%, 63.127136%, 80.412292%)"
                  offset="0.519531"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(46.842957%, 62.826538%, 80.203247%)"
                  offset="0.523438"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(46.464539%, 62.524414%, 79.994202%)"
                  offset="0.527344"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(46.086121%, 62.223816%, 79.785156%)"
                  offset="0.53125"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(45.707703%, 61.921692%, 79.576111%)"
                  offset="0.535156"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(45.330811%, 61.621094%, 79.368591%)"
                  offset="0.539062"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(44.952393%, 61.31897%, 79.159546%)"
                  offset="0.542969"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(44.573975%, 61.018372%, 78.9505%)"
                  offset="0.546875"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(44.195557%, 60.716248%, 78.741455%)"
                  offset="0.550781"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(43.817139%, 60.415649%, 78.53241%)"
                  offset="0.554688"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(43.438721%, 60.113525%, 78.323364%)"
                  offset="0.558594"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(43.061829%, 59.812927%, 78.115845%)"
                  offset="0.5625"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(42.683411%, 59.510803%, 77.906799%)"
                  offset="0.566406"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(42.304993%, 59.210205%, 77.697754%)"
                  offset="0.570312"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(41.926575%, 58.908081%, 77.488708%)"
                  offset="0.574219"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(41.548157%, 58.607483%, 77.279663%)"
                  offset="0.578125"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(41.171265%, 58.305359%, 77.070618%)"
                  offset="0.582031"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(40.792847%, 58.004761%, 76.863098%)"
                  offset="0.585938"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(40.414429%, 57.702637%, 76.654053%)"
                  offset="0.589844"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(40.036011%, 57.402039%, 76.445007%)"
                  offset="0.59375"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(39.657593%, 57.099915%, 76.235962%)"
                  offset="0.597656"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(39.279175%, 56.799316%, 76.026917%)"
                  offset="0.601562"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(38.902283%, 56.497192%, 75.819397%)"
                  offset="0.605469"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(38.523865%, 56.196594%, 75.610352%)"
                  offset="0.609375"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(38.145447%, 55.89447%, 75.401306%)"
                  offset="0.613281"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(37.767029%, 55.593872%, 75.192261%)"
                  offset="0.617188"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(37.388611%, 55.291748%, 74.983215%)"
                  offset="0.621094"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(37.010193%, 54.99115%, 74.77417%)"
                  offset="0.625"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(36.633301%, 54.689026%, 74.56665%)"
                  offset="0.628906"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(36.254883%, 54.388428%, 74.357605%)"
                  offset="0.632812"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(35.876465%, 54.086304%, 74.14856%)"
                  offset="0.636719"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(35.498047%, 53.785706%, 73.939514%)"
                  offset="0.640625"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(35.119629%, 53.483582%, 73.730469%)"
                  offset="0.644531"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(34.741211%, 53.182983%, 73.522949%)"
                  offset="0.648438"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(34.364319%, 52.882385%, 73.313904%)"
                  offset="0.652344"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(33.985901%, 52.580261%, 73.104858%)"
                  offset="0.65625"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(33.607483%, 52.279663%, 72.895813%)"
                  offset="0.660156"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(33.229065%, 51.977539%, 72.686768%)"
                  offset="0.664062"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(32.850647%, 51.676941%, 72.477722%)"
                  offset="0.667969"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(32.473755%, 51.374817%, 72.270203%)"
                  offset="0.671875"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(32.095337%, 51.074219%, 72.061157%)"
                  offset="0.675781"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(31.716919%, 50.772095%, 71.852112%)"
                  offset="0.679688"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(31.338501%, 50.471497%, 71.643066%)"
                  offset="0.683594"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(30.960083%, 50.169373%, 71.434021%)"
                  offset="0.6875"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(30.581665%, 49.868774%, 71.226501%)"
                  offset="0.691406"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(30.204773%, 49.56665%, 71.017456%)"
                  offset="0.695312"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(29.826355%, 49.266052%, 70.808411%)"
                  offset="0.699219"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(29.447937%, 48.963928%, 70.599365%)"
                  offset="0.703125"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(29.069519%, 48.66333%, 70.39032%)"
                  offset="0.707031"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(28.691101%, 48.361206%, 70.181274%)"
                  offset="0.710938"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(28.312683%, 48.060608%, 69.973755%)"
                  offset="0.714844"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(27.935791%, 47.758484%, 69.764709%)"
                  offset="0.71875"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(27.557373%, 47.457886%, 69.555664%)"
                  offset="0.722656"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(27.178955%, 47.155762%, 69.346619%)"
                  offset="0.726562"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(26.800537%, 46.855164%, 69.137573%)"
                  offset="0.730469"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(26.422119%, 46.55304%, 68.930054%)"
                  offset="0.734375"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(26.045227%, 46.252441%, 68.721008%)"
                  offset="0.738281"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(25.666809%, 45.950317%, 68.511963%)"
                  offset="0.742188"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(25.288391%, 45.649719%, 68.302917%)"
                  offset="0.746094"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(25.068665%, 45.362854%, 67.997742%)"
                  offset="0.75"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(25.007629%, 45.092773%, 67.59491%)"
                  offset="0.753906"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(24.946594%, 44.822693%, 67.190552%)"
                  offset="0.757812"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(24.885559%, 44.552612%, 66.78772%)"
                  offset="0.761719"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(24.824524%, 44.282532%, 66.384888%)"
                  offset="0.765625"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(24.763489%, 44.012451%, 65.982056%)"
                  offset="0.769531"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(24.702454%, 43.740845%, 65.579224%)"
                  offset="0.773438"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(24.641418%, 43.470764%, 65.176392%)"
                  offset="0.777344"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(24.581909%, 43.200684%, 64.772034%)"
                  offset="0.78125"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(24.520874%, 42.930603%, 64.369202%)"
                  offset="0.785156"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(24.459839%, 42.660522%, 63.96637%)"
                  offset="0.789062"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(24.398804%, 42.390442%, 63.563538%)"
                  offset="0.792969"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(24.337769%, 42.120361%, 63.160706%)"
                  offset="0.796875"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(24.276733%, 41.848755%, 62.756348%)"
                  offset="0.800781"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(24.215698%, 41.578674%, 62.353516%)"
                  offset="0.804688"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(24.154663%, 41.308594%, 61.950684%)"
                  offset="0.808594"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(24.093628%, 41.038513%, 61.547852%)"
                  offset="0.8125"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(24.032593%, 40.768433%, 61.14502%)"
                  offset="0.816406"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(23.971558%, 40.498352%, 60.740662%)"
                  offset="0.820312"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(23.910522%, 40.226746%, 60.33783%)"
                  offset="0.824219"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(23.849487%, 39.956665%, 59.934998%)"
                  offset="0.828125"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(23.788452%, 39.686584%, 59.532166%)"
                  offset="0.832031"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(23.727417%, 39.416504%, 59.129333%)"
                  offset="0.835938"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(23.667908%, 39.146423%, 58.724976%)"
                  offset="0.839844"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(23.606873%, 38.876343%, 58.322144%)"
                  offset="0.84375"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(23.545837%, 38.606262%, 57.919312%)"
                  offset="0.847656"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(23.484802%, 38.334656%, 57.516479%)"
                  offset="0.851562"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(23.423767%, 38.064575%, 57.113647%)"
                  offset="0.855469"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(23.362732%, 37.794495%, 56.70929%)"
                  offset="0.859375"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(23.301697%, 37.524414%, 56.306458%)"
                  offset="0.863281"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(23.240662%, 37.254333%, 55.903625%)"
                  offset="0.867188"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(23.179626%, 36.984253%, 55.500793%)"
                  offset="0.871094"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(23.118591%, 36.714172%, 55.097961%)"
                  offset="0.875"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(23.057556%, 36.442566%, 54.695129%)"
                  offset="0.878906"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(22.996521%, 36.172485%, 54.290771%)"
                  offset="0.882812"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(22.935486%, 35.902405%, 53.887939%)"
                  offset="0.886719"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(22.874451%, 35.632324%, 53.485107%)"
                  offset="0.890625"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(22.813416%, 35.362244%, 53.082275%)"
                  offset="0.894531"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(22.75238%, 35.092163%, 52.679443%)"
                  offset="0.898438"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(22.692871%, 34.820557%, 52.275085%)"
                  offset="0.902344"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(22.631836%, 34.550476%, 51.872253%)"
                  offset="0.90625"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(22.570801%, 34.280396%, 51.469421%)"
                  offset="0.910156"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(22.509766%, 34.010315%, 51.066589%)"
                  offset="0.914062"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(22.44873%, 33.740234%, 50.663757%)"
                  offset="0.917969"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(22.387695%, 33.470154%, 50.259399%)"
                  offset="0.921875"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(22.32666%, 33.200073%, 49.856567%)"
                  offset="0.925781"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(22.265625%, 32.928467%, 49.453735%)"
                  offset="0.929688"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(22.20459%, 32.658386%, 49.050903%)"
                  offset="0.933594"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(22.143555%, 32.388306%, 48.648071%)"
                  offset="0.9375"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(22.08252%, 32.118225%, 48.243713%)"
                  offset="0.941406"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(22.021484%, 31.848145%, 47.840881%)"
                  offset="0.945312"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(21.960449%, 31.578064%, 47.438049%)"
                  offset="0.949219"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(21.899414%, 31.306458%, 47.035217%)"
                  offset="0.953125"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(21.838379%, 31.036377%, 46.632385%)"
                  offset="0.957031"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(21.777344%, 30.766296%, 46.228027%)"
                  offset="0.960938"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(21.717834%, 30.496216%, 45.825195%)"
                  offset="0.964844"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(21.656799%, 30.226135%, 45.422363%)"
                  offset="0.96875"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(21.595764%, 29.956055%, 45.019531%)"
                  offset="0.972656"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(21.534729%, 29.685974%, 44.616699%)"
                  offset="0.976562"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(21.473694%, 29.414368%, 44.213867%)"
                  offset="0.980469"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(21.412659%, 29.144287%, 43.809509%)"
                  offset="0.984375"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(21.351624%, 28.874207%, 43.406677%)"
                  offset="0.988281"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(21.290588%, 28.604126%, 43.003845%)"
                  offset="0.992188"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(21.229553%, 28.334045%, 42.601013%)"
                  offset="0.996094"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(21.199036%, 28.199768%, 42.399597%)"
                  offset="1"
                />
              </radialGradient>
              <clipPath id="28756239cd">
                <path
                  d="M 2.988281 5.992188 L 54 5.992188 L 54 53.777344 L 2.988281 53.777344 Z M 2.988281 5.992188 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="7302eb2433">
                <path
                  d="M 3 5.992188 L 53 5.992188 L 53 53 L 3 53 Z M 3 5.992188 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <image
                x="0"
                y="0"
                width="54"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAxCAYAAACRQFplAAAABmJLR0QA/wD/AP+gvaeTAAADz0lEQVRogbWZ67LjIAyDnZZ9rH3/l2o2+6duFUUypj2HGQ9JL8CHhKHpFhF/I+L2jA1qFwG1Kscz8Drjn6hd7FAvlxERfwCoA1eBMRBeO6i83uMMtkG9Q3ttsGGgFFyImqEQZkWxGwEi2BaL6jHYih0RjqEUXNeGm6hTtejCpRURaAaHQKpUNmQgZUMHhjG15kwxhou4qsZQCKRUczZUFnRgW0Q8KjgF9mkCOUTtrFhZMCE3qN1k5mRYsHus25HhXEasbIgWZNV4bWGf3O9FOVxjq3Z0pZMRFQym9k7iwnKxpbNi144KSsFVNlRKqbU16++UUBjsDkDd/Ux1krWy4SwTKvvNSvb5UGC5zmZ2DFEz0KoNZxlQKebW9I5gDMWA31ixsmEntbtSHt8UmMuQXbDsxNnQWTDt9ynMAeM9GEwplyDOjq5Tp9jMgl3A8jDQAeserVZsiJvwJxkQ474KpjKk26SrjFidNBgMS9cRaMFXOLAqQ1abdCcb8p6lThYVjFSI++V0n7FiRzcIp9hKBnQquQz+cluqxdFJ/dXsdlN8N8POFMq+pBUZbMWOncSBFqxOFl37nUCen3m9llAIdwuvXMc6vHetWrBrv4RlwFKx7lpTA1pZWw5GgTmlZCBUx5JoxxCDc4rxnuVKJ0GcLGdiYysynFtrPOsqI6o9S62tToJoqYRR2bCypFtjlQ0rC3OCKBODCXSTtOLMkmxHHqDLhLONF+1XJgYHg3WlmLJllUCUDVft17GchQlSjCVnqOqHKK+xyoI8AS6FK7gWDPY3W2POltlQxPsQjLOuLLiq0jIMg6lZc+px6mclnAW7Kn0FU4ExlFKPZzVLZcEqhW+izY9gGIwb5vVWbQE8cNyMWS20nOpziy9hcDKHaKiC5DNlNoQ2ZKBZhsNYhQlzfVLM1aweWzIhUq2g1z6FcYOOzntDvLmi4B0gdriewbRmvQEUdP26H5PG1Oyyclu8LchJYQXIDvKT+1G9aQaBkPn9RwGjAH4UQt2P+K4cjWt1/+tlxHVA7l4dcCPeVsSnvcekrYg5/Ff3A16sfhe5x2j4HXx0zd9R7fN1974Fl4p1YPAPuYh3kgj43A4xg3QxA2xNxqDOqsdmeKLIlK42aAZjm65AVsAlYCqmBqFU2qCB6kjF8dOQU/gRV5X256AVWMB7DszB/QZkuOshOmHb8eA7P1sS4FHAuHCQCthOQoK5f+px0GzBW5wL2xGVe0RfPQc5Azq9phTjnx2siHs0wHasLNkFqiBL8BFXtSK0Wu5Qy59jMLRkd+2p7aJj2Rfkf+/Y1FqWw6owAAAAAElFTkSuQmCC"
                id="95ac529c53"
                height="49"
                preserveAspectRatio="xMidYMid meet"
              />
              <mask id="3652940c6b">
                <g filter="url(#d4a937c4c1)">
                  <g>
                    <image
                      x="0"
                      y="0"
                      width="54"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAxCAYAAACRQFplAAAABmJLR0QA/wD/AP+gvaeTAAADz0lEQVRogbWZ67LjIAyDnZZ9rH3/l2o2+6duFUUypj2HGQ9JL8CHhKHpFhF/I+L2jA1qFwG1Kscz8Drjn6hd7FAvlxERfwCoA1eBMRBeO6i83uMMtkG9Q3ttsGGgFFyImqEQZkWxGwEi2BaL6jHYih0RjqEUXNeGm6hTtejCpRURaAaHQKpUNmQgZUMHhjG15kwxhou4qsZQCKRUczZUFnRgW0Q8KjgF9mkCOUTtrFhZMCE3qN1k5mRYsHus25HhXEasbIgWZNV4bWGf3O9FOVxjq3Z0pZMRFQym9k7iwnKxpbNi144KSsFVNlRKqbU16++UUBjsDkDd/Ux1krWy4SwTKvvNSvb5UGC5zmZ2DFEz0KoNZxlQKebW9I5gDMWA31ixsmEntbtSHt8UmMuQXbDsxNnQWTDt9ynMAeM9GEwplyDOjq5Tp9jMgl3A8jDQAeserVZsiJvwJxkQ474KpjKk26SrjFidNBgMS9cRaMFXOLAqQ1abdCcb8p6lThYVjFSI++V0n7FiRzcIp9hKBnQquQz+cluqxdFJ/dXsdlN8N8POFMq+pBUZbMWOncSBFqxOFl37nUCen3m9llAIdwuvXMc6vHetWrBrv4RlwFKx7lpTA1pZWw5GgTmlZCBUx5JoxxCDc4rxnuVKJ0GcLGdiYysynFtrPOsqI6o9S62tToJoqYRR2bCypFtjlQ0rC3OCKBODCXSTtOLMkmxHHqDLhLONF+1XJgYHg3WlmLJllUCUDVft17GchQlSjCVnqOqHKK+xyoI8AS6FK7gWDPY3W2POltlQxPsQjLOuLLiq0jIMg6lZc+px6mclnAW7Kn0FU4ExlFKPZzVLZcEqhW+izY9gGIwb5vVWbQE8cNyMWS20nOpziy9hcDKHaKiC5DNlNoQ2ZKBZhsNYhQlzfVLM1aweWzIhUq2g1z6FcYOOzntDvLmi4B0gdriewbRmvQEUdP26H5PG1Oyyclu8LchJYQXIDvKT+1G9aQaBkPn9RwGjAH4UQt2P+K4cjWt1/+tlxHVA7l4dcCPeVsSnvcekrYg5/Ff3A16sfhe5x2j4HXx0zd9R7fN1974Fl4p1YPAPuYh3kgj43A4xg3QxA2xNxqDOqsdmeKLIlK42aAZjm65AVsAlYCqmBqFU2qCB6kjF8dOQU/gRV5X256AVWMB7DszB/QZkuOshOmHb8eA7P1sS4FHAuHCQCthOQoK5f+px0GzBW5wL2xGVe0RfPQc5Azq9phTjnx2siHs0wHasLNkFqiBL8BFXtSK0Wu5Qy59jMLRkd+2p7aJj2Rfkf+/Y1FqWw6owAAAAAElFTkSuQmCC"
                      height="49"
                      preserveAspectRatio="xMidYMid meet"
                    />
                  </g>
                </g>
              </mask>
              <radialGradient
                gradientTransform="matrix(1.001207, 0, 0, -0.998793, 0.208074, 50.340797)"
                gradientUnits="userSpaceOnUse"
                r="44.690429"
                cx="16.018365"
                id="d3a88e8a18"
                cy="12.466829"
                fx="16.018365"
                fy="12.466829"
              >
                <stop
                  stop-opacity="1"
                  stop-color="rgb(100%, 100%, 100%)"
                  offset="0"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(100%, 100%, 100%)"
                  offset="1"
                />
              </radialGradient>
              <clipPath id="ada0bd4505">
                <rect x="0" width="54" y="0" height="49" />
              </clipPath>
              <pattern
                id="a5dd0559e2"
                patternUnits="userSpaceOnUse"
                width="54"
                patternTransform="matrix(0.97277, 0, 0, -0.975122, -0.202408, 49.088423)"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 54 49"
                height="49"
                x="0"
                y="0"
              >
                <g>
                  <g clip-path="url(#ada0bd4505)">
                    <g mask="url(#3652940c6b)">
                      <rect
                        x="-25.234735"
                        fill="url(#d3a88e8a18)"
                        width="166.534751"
                        height="88.604296"
                        y="-24.726728"
                      />
                    </g>
                  </g>
                </g>
              </pattern>
              <clipPath id="a1cf72edd5">
                <path
                  d="M 0 0 L 65 0 L 65 42 L 0 42 Z M 0 0 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="0681b0c719">
                <path
                  d="M 14.761719 61.34375 L -24.769531 9.539062 L 50.238281 -19.34375 L 89.769531 32.460938 Z M 14.761719 61.34375 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <image
                x="0"
                y="0"
                width="65"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAAqCAYAAADsxDbcAAAABmJLR0QA/wD/AP+gvaeTAAAB/klEQVRoge2YzW7CMBAGp2166Ps/ZSu1ElBC+O/BsjDBCbbXXpuKuSAFFJL54o13X4Azj8MWWAFLYDH69B3z/WYJ7N2TdjrXLuYErAm/0anvBuA4PvkjSBi4TT9WxopR+i4tSzhyP/0QGQPmSZqkVQkD12s4ZQn8MpO+S2sSjpiLlxS+BaaAzqbv0pKEDWbtSgrfL3CI/eMWJBy4TT9Fwo6I9F1qS+jxpx/z6K9JSN+lloQ9l/Ql1X9Hhs1eDQk98Tc8PtYjTN9FU4JNX/LOX5IpfRctCXbTI9n29ni2vDkoLWGHP/1YGXsKNnqlJJwJS/+ejA2F0ncpIWHLdfopS2CFeYpUyCnhhFm30sKnkr5LLglzw45QGbPtbkmkEuywQ1r4vMMOLSQSfMOO2A1QtfRdUiTYYYek8Nn0kxqe3MRKsO2upPAFDzu0CJVwIM+gM2rYoUWIhA23NxcrI2nYocWcBN+wI6XzSx52aDElwba7km2veNihxViCO+yQVP/s7W5JXAlr5gedITKyDju06Li0u5J3/oLC7W5JOuAb2ba32LBDiw74Ir36P2z6LvckTMlQb3dL0gGfhC8B1WGHFvZJCFkCVdvdkvgkjGU00e6WZE6CTb/pLW8OpiQ01+6WZPx2aGrYocUb8A78YERs+Qfv/RQ+gNfaF/HkSX3+AM7/g/5owsqqAAAAAElFTkSuQmCC"
                id="b724493bee"
                height="42"
                preserveAspectRatio="xMidYMid meet"
              />
              <mask id="fa8e07a8d4">
                <g filter="url(#d4a937c4c1)">
                  <g transform="matrix(1, 0, 0, 1, 0, 0)">
                    <image
                      x="0"
                      y="0"
                      width="65"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAAqCAYAAADsxDbcAAAABmJLR0QA/wD/AP+gvaeTAAAB/klEQVRoge2YzW7CMBAGp2166Ps/ZSu1ElBC+O/BsjDBCbbXXpuKuSAFFJL54o13X4Azj8MWWAFLYDH69B3z/WYJ7N2TdjrXLuYErAm/0anvBuA4PvkjSBi4TT9WxopR+i4tSzhyP/0QGQPmSZqkVQkD12s4ZQn8MpO+S2sSjpiLlxS+BaaAzqbv0pKEDWbtSgrfL3CI/eMWJBy4TT9Fwo6I9F1qS+jxpx/z6K9JSN+lloQ9l/Ql1X9Hhs1eDQk98Tc8PtYjTN9FU4JNX/LOX5IpfRctCXbTI9n29ni2vDkoLWGHP/1YGXsKNnqlJJwJS/+ejA2F0ncpIWHLdfopS2CFeYpUyCnhhFm30sKnkr5LLglzw45QGbPtbkmkEuywQ1r4vMMOLSQSfMOO2A1QtfRdUiTYYYek8Nn0kxqe3MRKsO2upPAFDzu0CJVwIM+gM2rYoUWIhA23NxcrI2nYocWcBN+wI6XzSx52aDElwba7km2veNihxViCO+yQVP/s7W5JXAlr5gedITKyDju06Li0u5J3/oLC7W5JOuAb2ba32LBDiw74Ir36P2z6LvckTMlQb3dL0gGfhC8B1WGHFvZJCFkCVdvdkvgkjGU00e6WZE6CTb/pLW8OpiQ01+6WZPx2aGrYocUb8A78YERs+Qfv/RQ+gNfaF/HkSX3+AM7/g/5owsqqAAAAAElFTkSuQmCC"
                      height="42"
                      preserveAspectRatio="xMidYMid meet"
                    />
                  </g>
                </g>
              </mask>
              <clipPath id="c456465f8d">
                <rect x="0" width="65" y="0" height="42" />
              </clipPath>
              <pattern
                id="c906aef455"
                patternUnits="userSpaceOnUse"
                width="65"
                patternTransform="matrix(0.55226, -0.385138, -0.421423, -1.000145, -24.861403, 54.925206)"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 65 42"
                height="42"
                x="0"
                y="0"
              >
                <g>
                  <g clip-path="url(#c456465f8d)">
                    <g clip-path="url(#a1cf72edd5)">
                      <g clip-path="url(#0681b0c719)">
                        <g mask="url(#fa8e07a8d4)">
                          <rect
                            x="-10.620638"
                            width="277.668185"
                            fill="#ffffff"
                            height="154.072953"
                            y="-101.487624"
                            fill-opacity="1"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </pattern>
              <clipPath id="bb6a4cb163">
                <path
                  d="M 0 0 L 70 0 L 70 38 L 0 38 Z M 0 0 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="054a486381">
                <path
                  d="M -31.765625 20.257812 L 32.683594 -20.84375 L 101.765625 17.742188 L 37.316406 58.84375 Z M -31.765625 20.257812 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <image
                x="0"
                y="0"
                width="70"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAmCAYAAAB52u3eAAAABmJLR0QA/wD/AP+gvaeTAAABbUlEQVRoge2Y/2qDMBSFP7X+KuwB9qR78HUdjEL3R3JZCInamdho7weXQrE1OZ7cnFgBH8DZqzHwnVu9rYaD0gDvwMXWp63LTH0BV+AHuNv/Om058Nw0mCcvoswJEhPvCnwDN4xQFVBvOI/kVMAb08tm6fKKXdsDnb3XbqiczxpoSSdIqAaMUMUvu9hTrG0NpHWTf5008eLctGRA4qYTaUWJualNMrOV/OdJ1fZ3qd0U6k09T2riay1c2crtphHTwLuV411M6rUty64nr5sGjEjZAmbOpiduasi70438RYKkg98KcVNH3p1OmvgqNz1zm5RIkKsv+W56aK6l5IepgJnDTbMBsxRhfMRN/sRS9qYzxknBgFmqMC5zATOVmyQStHLTvRE7riR10x6FcRE3hSLBKjftXRif2HHl4eV1NGFcpgLmrJOOLIxP7LgSdNMrCeMTC5gvL4xL6LiiBNj1i3xFURRFURRFURRFKYNfA7g0WTOosgEAAAAASUVORK5CYII="
                id="67bd82573a"
                height="38"
                preserveAspectRatio="xMidYMid meet"
              />
              <mask id="0de619ef42">
                <g filter="url(#d4a937c4c1)">
                  <g>
                    <image
                      x="0"
                      y="0"
                      width="70"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAmCAYAAAB52u3eAAAABmJLR0QA/wD/AP+gvaeTAAABbUlEQVRoge2Y/2qDMBSFP7X+KuwB9qR78HUdjEL3R3JZCInamdho7weXQrE1OZ7cnFgBH8DZqzHwnVu9rYaD0gDvwMXWp63LTH0BV+AHuNv/Om058Nw0mCcvoswJEhPvCnwDN4xQFVBvOI/kVMAb08tm6fKKXdsDnb3XbqiczxpoSSdIqAaMUMUvu9hTrG0NpHWTf5008eLctGRA4qYTaUWJualNMrOV/OdJ1fZ3qd0U6k09T2riay1c2crtphHTwLuV411M6rUty64nr5sGjEjZAmbOpiduasi70438RYKkg98KcVNH3p1OmvgqNz1zm5RIkKsv+W56aK6l5IepgJnDTbMBsxRhfMRN/sRS9qYzxknBgFmqMC5zATOVmyQStHLTvRE7riR10x6FcRE3hSLBKjftXRif2HHl4eV1NGFcpgLmrJOOLIxP7LgSdNMrCeMTC5gvL4xL6LiiBNj1i3xFURRFURRFURRFKYNfA7g0WTOosgEAAAAASUVORK5CYII="
                      height="38"
                      preserveAspectRatio="xMidYMid meet"
                    />
                  </g>
                </g>
              </mask>
              <clipPath id="a716bec145">
                <rect x="0" width="70" y="0" height="38" />
              </clipPath>
              <pattern
                id="2b26372e37"
                patternUnits="userSpaceOnUse"
                width="70"
                patternTransform="matrix(0.425881, 0.512768, 0.667838, -0.918061, -46.890621, 16.872811)"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 70 38"
                height="38"
                x="0"
                y="0"
              >
                <g>
                  <g clip-path="url(#a716bec145)">
                    <g clip-path="url(#bb6a4cb163)">
                      <g clip-path="url(#054a486381)">
                        <g mask="url(#0de619ef42)">
                          <rect
                            x="0.330875"
                            width="281.454046"
                            fill="#ffffff"
                            height="163.429909"
                            y="-17.228148"
                            fill-opacity="1"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </pattern>
              <clipPath id="50d79c0464">
                <path
                  d="M 29 31 L 48 31 L 48 49 L 29 49 Z M 29 31 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="488131d701">
                <path
                  d="M 31.347656 45.339844 C 31.695312 45.8125 32.085938 46.242188 32.515625 46.640625 C 32.949219 47.035156 33.414062 47.382812 33.914062 47.6875 C 34.414062 47.988281 34.941406 48.242188 35.492188 48.441406 C 36.042969 48.640625 36.605469 48.785156 37.1875 48.875 C 37.765625 48.960938 38.347656 48.992188 38.933594 48.96875 C 39.515625 48.941406 40.09375 48.859375 40.664062 48.722656 C 41.230469 48.582031 41.78125 48.390625 42.3125 48.144531 C 42.84375 47.894531 43.34375 47.597656 43.816406 47.253906 C 44.289062 46.90625 44.722656 46.519531 45.117188 46.089844 C 45.515625 45.65625 45.863281 45.191406 46.167969 44.691406 C 46.472656 44.191406 46.722656 43.667969 46.921875 43.121094 C 47.121094 42.570312 47.265625 42.007812 47.355469 41.429688 C 47.445312 40.851562 47.476562 40.273438 47.449219 39.6875 C 47.425781 39.105469 47.34375 38.527344 47.203125 37.960938 C 47.0625 37.394531 46.867188 36.84375 46.621094 36.316406 C 46.375 35.785156 46.074219 35.285156 45.730469 34.816406 C 45.382812 34.34375 44.992188 33.910156 44.5625 33.515625 C 44.128906 33.121094 43.664062 32.773438 43.164062 32.46875 C 42.664062 32.167969 42.136719 31.914062 41.585938 31.714844 C 41.035156 31.515625 40.472656 31.371094 39.894531 31.28125 C 39.3125 31.191406 38.730469 31.160156 38.148438 31.1875 C 37.5625 31.210938 36.984375 31.292969 36.417969 31.433594 C 35.847656 31.574219 35.296875 31.765625 34.765625 32.011719 C 34.234375 32.257812 33.734375 32.554688 33.261719 32.902344 C 32.789062 33.246094 32.355469 33.636719 31.960938 34.066406 C 31.566406 34.496094 31.214844 34.960938 30.910156 35.460938 C 30.609375 35.960938 30.355469 36.484375 30.15625 37.035156 C 29.957031 37.585938 29.8125 38.148438 29.722656 38.726562 C 29.632812 39.304688 29.601562 39.882812 29.628906 40.46875 C 29.652344 41.050781 29.738281 41.625 29.875 42.195312 C 30.015625 42.761719 30.210938 43.308594 30.457031 43.839844 C 30.707031 44.367188 31.003906 44.867188 31.347656 45.339844 Z M 31.347656 45.339844 "
                  clip-rule="evenodd"
                />
              </clipPath>
              <clipPath id="f9ae65c6e6">
                <path
                  d="M 0 0 L 54 0 L 54 49 L 0 49 Z M 0 0 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="64d82f2b3a">
                <path
                  d="M 35.105469 74.691406 L 77.425781 17.144531 L 18.894531 -25.691406 L -23.425781 31.855469 Z M 35.105469 74.691406 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <image
                x="0"
                y="0"
                width="54"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAxCAYAAACRQFplAAAABmJLR0QA/wD/AP+gvaeTAAAB20lEQVRoge2XeW+CQBBHXxXPHto7/f5fr5cHQtFK//jtZtGmFYxhm3ReQsDIMS8zzA5gGIZxBGexA0AxDIE+0AVKYA18uP3RN43JFXAJjPkulgNLYA4UTW+cnC7GRnSAW+AamADnKGtdYIvEVsACGAGvQNrkAbHE7oB7JDdFWRu6eEpUhikwQ5nsIOGs7gNiiE1Qpm4JchNUjj0kkKMSHBCkfHmWdR7StlgXvVf7cjcoa30kkaIS9KVZoGz5d+4gbYuNUGYukMgUyT244xGwQcH3gE9CExm7//+kWB+V1xAFeo4yeA08ItnCnbNhV2jIbmn+SoxS9FuCsjJAwU+AJ5SRnLC29fauqyXWOX3sv1ISXn5/vEUlt0EtvnC/t5Vzyr1rD9J2xjZuK1BLzwnr1TNqEGvgHZVhRphA1pXrD9K2WI6CzVDnWyCJBAU+QNlaAm+oLJdIPnPX1yKGmBcaE6YNL+Pb/Qotzq9I3AvWnj5iLNAz1OV8U/hE2Ri7eLao/HzWXtx+xh+fPDIU7Bm7En6k8gtyijJVlatNrFlxThiTfLYG7E73KyTsS/Jgi68S+7MlQVPIT58tKRJsTGyxKglaV0vU0muvWYZhGIZhGIZhGIZhGIZhGMZ/5As5OJiNlObo5QAAAABJRU5ErkJggg=="
                id="39554d400d"
                height="49"
                preserveAspectRatio="xMidYMid meet"
              />
              <mask id="fb0c1585cb">
                <g filter="url(#d4a937c4c1)">
                  <g>
                    <image
                      x="0"
                      y="0"
                      width="54"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAxCAYAAACRQFplAAAABmJLR0QA/wD/AP+gvaeTAAAB20lEQVRoge2XeW+CQBBHXxXPHto7/f5fr5cHQtFK//jtZtGmFYxhm3ReQsDIMS8zzA5gGIZxBGexA0AxDIE+0AVKYA18uP3RN43JFXAJjPkulgNLYA4UTW+cnC7GRnSAW+AamADnKGtdYIvEVsACGAGvQNrkAbHE7oB7JDdFWRu6eEpUhikwQ5nsIOGs7gNiiE1Qpm4JchNUjj0kkKMSHBCkfHmWdR7StlgXvVf7cjcoa30kkaIS9KVZoGz5d+4gbYuNUGYukMgUyT244xGwQcH3gE9CExm7//+kWB+V1xAFeo4yeA08ItnCnbNhV2jIbmn+SoxS9FuCsjJAwU+AJ5SRnLC29fauqyXWOX3sv1ISXn5/vEUlt0EtvnC/t5Vzyr1rD9J2xjZuK1BLzwnr1TNqEGvgHZVhRphA1pXrD9K2WI6CzVDnWyCJBAU+QNlaAm+oLJdIPnPX1yKGmBcaE6YNL+Pb/Qotzq9I3AvWnj5iLNAz1OV8U/hE2Ri7eLao/HzWXtx+xh+fPDIU7Bm7En6k8gtyijJVlatNrFlxThiTfLYG7E73KyTsS/Jgi68S+7MlQVPIT58tKRJsTGyxKglaV0vU0muvWYZhGIZhGIZhGIZhGIZhGMZ/5As5OJiNlObo5QAAAABJRU5ErkJggg=="
                      height="49"
                      preserveAspectRatio="xMidYMid meet"
                    />
                  </g>
                </g>
              </mask>
              <radialGradient
                gradientTransform="matrix(-0.807257, -0.590814, 0.592243, -0.805309, 38.834888, 36.694302)"
                gradientUnits="userSpaceOnUse"
                r="8.946782"
                cx="16.075708"
                id="0d25c96ec2"
                cy="16.637712"
                fx="16.075708"
                fy="16.637712"
              >
                <stop
                  stop-opacity="1"
                  stop-color="rgb(100%, 100%, 100%)"
                  offset="0"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(100%, 100%, 100%)"
                  offset="1"
                />
              </radialGradient>
              <clipPath id="e8bdecdcfc">
                <rect x="0" width="54" y="0" height="49" />
              </clipPath>
              <pattern
                id="48efd66746"
                patternUnits="userSpaceOnUse"
                width="54"
                patternTransform="matrix(0.995575, 0.000000000000000055, -0.000000000000000055, -0.995575, 2.986726, 53.814159)"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 54 49"
                height="49"
                x="0"
                y="0"
              >
                <g>
                  <g clip-path="url(#e8bdecdcfc)">
                    <g clip-path="url(#f9ae65c6e6)">
                      <g clip-path="url(#64d82f2b3a)">
                        <g mask="url(#fb0c1585cb)">
                          <rect
                            x="-27.86"
                            fill="url(#0d25c96ec2)"
                            width="162.72"
                            height="86.784"
                            y="-19.472"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </pattern>
              <clipPath id="f76000c495">
                <path
                  d="M 0 0 L 55 0 L 55 49 L 0 49 Z M 0 0 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="9d3cabcdcf">
                <path
                  d="M 54.472656 -5.257812 L 59.882812 48.527344 L 0.527344 54.257812 L -4.882812 0.472656 Z M 54.472656 -5.257812 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <image
                x="0"
                y="0"
                width="55"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAxCAYAAAB+gjFbAAAABmJLR0QA/wD/AP+gvaeTAAAA/ElEQVRoge2UQQ6CMBBFX6EIHMOt3v9sLnUBKCIl1DJAk/8SQiDT5L/MdEAIIYQQQgghhBBCCCHOhTs6gAEF4IEqd7mSXgRogLZ/N0CTk5zvnwsjASZC439nlRtEasISQSlO0jnHt0i0wFLNnnLDRfcpgWPOWMm9N9bWgVfWeMBtITfeWElj9GdNQTfePy6xcms3lpWkIyAyx1LRdGNZBZ47U/fZijUSS3KxG2tryYrPaG2KB64GgUPf3kokJHdPFAjVlETcDws8cJsJF9uV4MY6kn86l3zR9yLUuZZu3WcjMocDHhhurCNxwPPoEFZkO3JrkFyuSC5XJJcrL80YDVh1nJ/GAAAAAElFTkSuQmCC"
                id="d52d398bed"
                height="49"
                preserveAspectRatio="xMidYMid meet"
              />
              <mask id="9e65577e89">
                <g filter="url(#d4a937c4c1)">
                  <g>
                    <image
                      x="0"
                      y="0"
                      width="55"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAxCAYAAAB+gjFbAAAABmJLR0QA/wD/AP+gvaeTAAAA/ElEQVRoge2UQQ6CMBBFX6EIHMOt3v9sLnUBKCIl1DJAk/8SQiDT5L/MdEAIIYQQQgghhBBCCCHOhTs6gAEF4IEqd7mSXgRogLZ/N0CTk5zvnwsjASZC439nlRtEasISQSlO0jnHt0i0wFLNnnLDRfcpgWPOWMm9N9bWgVfWeMBtITfeWElj9GdNQTfePy6xcms3lpWkIyAyx1LRdGNZBZ47U/fZijUSS3KxG2tryYrPaG2KB64GgUPf3kokJHdPFAjVlETcDws8cJsJF9uV4MY6kn86l3zR9yLUuZZu3WcjMocDHhhurCNxwPPoEFZkO3JrkFyuSC5XJJcrL80YDVh1nJ/GAAAAAElFTkSuQmCC"
                      height="49"
                      preserveAspectRatio="xMidYMid meet"
                    />
                  </g>
                </g>
              </mask>
              <clipPath id="a37ddd09b9">
                <rect x="0" width="55" y="0" height="49" />
              </clipPath>
              <pattern
                id="9fb19d5948"
                patternUnits="userSpaceOnUse"
                width="55"
                patternTransform="matrix(-0.73881, 0.0936598, 0.074326, 0.970422, -2.356628, -8.30715)"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 55 49"
                height="49"
                x="0"
                y="0"
              >
                <g>
                  <g clip-path="url(#a37ddd09b9)">
                    <g clip-path="url(#f76000c495)">
                      <g clip-path="url(#9d3cabcdcf)">
                        <g mask="url(#9e65577e89)">
                          <rect
                            x="-187.646668"
                            width="226.033721"
                            fill="#ffffff"
                            height="109.136577"
                            y="-7.89072"
                            fill-opacity="1"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </pattern>
              <clipPath id="2e2b984787">
                <path
                  d="M 0 0 L 70 0 L 70 38 L 0 38 Z M 0 0 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="4eb9b51136">
                <path
                  d="M -31.765625 20.257812 L 32.683594 -20.839844 L 101.765625 17.742188 L 37.316406 58.839844 Z M -31.765625 20.257812 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <image
                x="0"
                y="0"
                width="70"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAmCAYAAAB52u3eAAAABmJLR0QA/wD/AP+gvaeTAAAB2klEQVRoge2Y223CQBBFDzJKJNJG6kgVaSJdpIkUGTDGDuH9SD7WNxAEaHh4d204krUW4mN0NMwOF+7cOZVW6AJiJAGegRUwC1xLVCTAC9ABHrkL+iMBXoGn8ukAD8ASmAesKzgJ8MZGik4JWnGjghLgnY2U7UeC2tygoAT44L+MQ2cb9xNbBKnUMy3gp3xfA13gszy333fPPjD2XaxPtsWIFcel7Aqa+CrWJ/vEiCW27ukCGQ0TdEyMmHNYzu5nA2BaVbE+sYgRM2zdI0G1XhRPESOm2LqnixNUy2v+HDFign1ID6jZNX+JGDHG1j2fQI4b6tFzDTHiG/uQLohc0DXFiCH2RbHA7U3RUYUY8YV9SBe4zTsaqhQjCuyLYuGhHhM+xIgcW/f0yu8GxacYkWEb0j1cBwUhhBjRxzakU9y88kpIMSLFNqRT3I3nhRjEiB62IZ3idqZKiUmMsF7xKTCqqogYxYCryXrF96lAUKxihNJEy5DOuGLcGrsYscSeBV0lTayLGLHA/j8s44I0sW5ihOJWSxaUcUaaWFcxYsZpgb05Tay7GKE00XLV5xgENUWMGGMf0jlH4tamiREj7Ivi3ri1qWKE4lbLkM7ZShObLkYMsXWPBK1/Abx7gl2ZF0jjAAAAAElFTkSuQmCC"
                id="a5eeba8cb5"
                height="38"
                preserveAspectRatio="xMidYMid meet"
              />
              <mask id="26bf5bf9b6">
                <g filter="url(#d4a937c4c1)">
                  <g>
                    <image
                      x="0"
                      y="0"
                      width="70"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAmCAYAAAB52u3eAAAABmJLR0QA/wD/AP+gvaeTAAAB2klEQVRoge2Y223CQBBFDzJKJNJG6kgVaSJdpIkUGTDGDuH9SD7WNxAEaHh4d204krUW4mN0NMwOF+7cOZVW6AJiJAGegRUwC1xLVCTAC9ABHrkL+iMBXoGn8ukAD8ASmAesKzgJ8MZGik4JWnGjghLgnY2U7UeC2tygoAT44L+MQ2cb9xNbBKnUMy3gp3xfA13gszy333fPPjD2XaxPtsWIFcel7Aqa+CrWJ/vEiCW27ukCGQ0TdEyMmHNYzu5nA2BaVbE+sYgRM2zdI0G1XhRPESOm2LqnixNUy2v+HDFign1ID6jZNX+JGDHG1j2fQI4b6tFzDTHiG/uQLohc0DXFiCH2RbHA7U3RUYUY8YV9SBe4zTsaqhQjCuyLYuGhHhM+xIgcW/f0yu8GxacYkWEb0j1cBwUhhBjRxzakU9y88kpIMSLFNqRT3I3nhRjEiB62IZ3idqZKiUmMsF7xKTCqqogYxYCryXrF96lAUKxihNJEy5DOuGLcGrsYscSeBV0lTayLGLHA/j8s44I0sW5ihOJWSxaUcUaaWFcxYsZpgb05Tay7GKE00XLV5xgENUWMGGMf0jlH4tamiREj7Ivi3ri1qWKE4lbLkM7ZShObLkYMsXWPBK1/Abx7gl2ZF0jjAAAAAElFTkSuQmCC"
                      height="38"
                      preserveAspectRatio="xMidYMid meet"
                    />
                  </g>
                </g>
              </mask>
              <clipPath id="5f73d28b4f">
                <rect x="0" width="70" y="0" height="38" />
              </clipPath>
              <pattern
                id="bc7faed73d"
                patternUnits="userSpaceOnUse"
                width="70"
                patternTransform="matrix(0.435838, 0.524756, 0.683473, -0.939552, -46.605205, 22.378485)"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 70 38"
                height="38"
                x="0"
                y="0"
              >
                <g>
                  <g clip-path="url(#5f73d28b4f)">
                    <g clip-path="url(#2e2b984787)">
                      <g clip-path="url(#4eb9b51136)">
                        <g mask="url(#26bf5bf9b6)">
                          <rect
                            x="-4.924583"
                            width="275.024066"
                            fill="#ffffff"
                            height="159.691462"
                            y="-13.905273"
                            fill-opacity="1"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </pattern>
              <clipPath id="3da1f0991b">
                <path
                  d="M 8 23 L 22 23 L 22 38 L 8 38 Z M 8 23 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="dbd4fb7a0e">
                <path
                  d="M 9.472656 34.824219 C 9.742188 35.1875 10.039062 35.523438 10.375 35.828125 C 10.707031 36.132812 11.066406 36.402344 11.453125 36.632812 C 11.839844 36.867188 12.242188 37.0625 12.667969 37.214844 C 13.09375 37.371094 13.527344 37.480469 13.972656 37.550781 C 14.421875 37.617188 14.867188 37.644531 15.320312 37.625 C 15.769531 37.601562 16.214844 37.539062 16.65625 37.433594 C 17.09375 37.324219 17.515625 37.175781 17.925781 36.988281 C 18.335938 36.796875 18.722656 36.566406 19.085938 36.300781 C 19.449219 36.035156 19.785156 35.734375 20.089844 35.402344 C 20.394531 35.070312 20.664062 34.710938 20.898438 34.328125 C 21.132812 33.941406 21.328125 33.539062 21.480469 33.113281 C 21.636719 32.691406 21.746094 32.257812 21.816406 31.8125 C 21.882812 31.367188 21.90625 30.917969 21.886719 30.46875 C 21.867188 30.019531 21.804688 29.574219 21.695312 29.136719 C 21.589844 28.699219 21.4375 28.277344 21.25 27.867188 C 21.058594 27.460938 20.828125 27.074219 20.558594 26.710938 C 20.292969 26.347656 19.992188 26.015625 19.660156 25.710938 C 19.328125 25.40625 18.96875 25.136719 18.582031 24.902344 C 18.195312 24.667969 17.792969 24.476562 17.367188 24.320312 C 16.941406 24.167969 16.507812 24.054688 16.0625 23.988281 C 15.613281 23.917969 15.164062 23.894531 14.714844 23.914062 C 14.261719 23.933594 13.820312 23.996094 13.378906 24.105469 C 12.941406 24.210938 12.519531 24.359375 12.109375 24.550781 C 11.699219 24.742188 11.3125 24.96875 10.949219 25.234375 C 10.585938 25.503906 10.25 25.800781 9.945312 26.132812 C 9.640625 26.464844 9.371094 26.824219 9.136719 27.210938 C 8.902344 27.59375 8.707031 28 8.554688 28.421875 C 8.398438 28.847656 8.289062 29.28125 8.21875 29.726562 C 8.152344 30.171875 8.128906 30.617188 8.148438 31.070312 C 8.167969 31.519531 8.230469 31.960938 8.339844 32.398438 C 8.445312 32.835938 8.59375 33.261719 8.785156 33.667969 C 8.976562 34.078125 9.207031 34.460938 9.472656 34.824219 Z M 9.472656 34.824219 "
                  clip-rule="evenodd"
                />
              </clipPath>
              <clipPath id="ce80d8ab11">
                <path
                  d="M 0 0 L 54 0 L 54 49 L 0 49 Z M 0 0 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="d765ba5026">
                <path
                  d="M 35.105469 74.691406 L 77.425781 17.144531 L 18.894531 -25.691406 L -23.425781 31.855469 Z M 35.105469 74.691406 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <image
                x="0"
                y="0"
                width="54"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAxCAYAAACRQFplAAAABmJLR0QA/wD/AP+gvaeTAAABb0lEQVRoge3W2U4bQRCF4W+M7QBhiQxZUIh4/+figkXGFrYJWwK5qB4BFza2rFEGqX6ppVZPtVRHVXV6SJIkSZIkSZIkSf4HGyvEdtBHD89ltZZqiZhPGGCn7Cs8YIYxfjeW3Rq8J2wXP/AV+9gsd+4xwRDnQmCr6C74tokj/BTiBvgshN0KMVuiRf9g2mimK7JI2EBU6gjH+IY9IWwmWrMj2vLGBxHWFW34BQf4jl84FGJGwnjucF1it7Vo3uYJ64tW3BLtty+qd1Lu9LxUbbvE9n0AYdWr1SmrK1yxV/b1+evY1jBP2KOYnXthFDfCLE6FmCtRsdsS81DutIZ5wmpDmAhBl2KmpqIy03I2KjEzLWpDFrviWLhgbel3YqYqIWKEC/GWjfHUaKYrskjYRDy+9Z/GtRBZeXHDIc5Ea7aKZQa+tvxdb3+ppqJSw8ayW4NlnawStt8v+0cxg38byitJkiRJkiRJkiRJkmQd/gHW6EnpYYV75gAAAABJRU5ErkJggg=="
                id="006c07da5f"
                height="49"
                preserveAspectRatio="xMidYMid meet"
              />
              <mask id="4a5d4d3256">
                <g filter="url(#d4a937c4c1)">
                  <g>
                    <image
                      x="0"
                      y="0"
                      width="54"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAxCAYAAACRQFplAAAABmJLR0QA/wD/AP+gvaeTAAABb0lEQVRoge3W2U4bQRCF4W+M7QBhiQxZUIh4/+figkXGFrYJWwK5qB4BFza2rFEGqX6ppVZPtVRHVXV6SJIkSZIkSZIkSf4HGyvEdtBHD89ltZZqiZhPGGCn7Cs8YIYxfjeW3Rq8J2wXP/AV+9gsd+4xwRDnQmCr6C74tokj/BTiBvgshN0KMVuiRf9g2mimK7JI2EBU6gjH+IY9IWwmWrMj2vLGBxHWFW34BQf4jl84FGJGwnjucF1it7Vo3uYJ64tW3BLtty+qd1Lu9LxUbbvE9n0AYdWr1SmrK1yxV/b1+evY1jBP2KOYnXthFDfCLE6FmCtRsdsS81DutIZ5wmpDmAhBl2KmpqIy03I2KjEzLWpDFrviWLhgbel3YqYqIWKEC/GWjfHUaKYrskjYRDy+9Z/GtRBZeXHDIc5Ea7aKZQa+tvxdb3+ppqJSw8ayW4NlnawStt8v+0cxg38byitJkiRJkiRJkiRJkmQd/gHW6EnpYYV75gAAAABJRU5ErkJggg=="
                      height="49"
                      preserveAspectRatio="xMidYMid meet"
                    />
                  </g>
                </g>
              </mask>
              <radialGradient
                gradientTransform="matrix(-0.807253, -0.59082, 0.592249, -0.805305, 14.492609, 40.800697)"
                gradientUnits="userSpaceOnUse"
                r="6.897728"
                cx="12.393938"
                id="79dba733d8"
                cy="12.827228"
                fx="12.393938"
                fy="12.827228"
              >
                <stop
                  stop-opacity="1"
                  stop-color="rgb(100%, 100%, 100%)"
                  offset="0"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(100%, 100%, 100%)"
                  offset="1"
                />
              </radialGradient>
              <clipPath id="f35a7a0876">
                <rect x="0" width="54" y="0" height="49" />
              </clipPath>
              <pattern
                id="45b827d4a6"
                patternUnits="userSpaceOnUse"
                width="54"
                patternTransform="matrix(0.995575, 0.00000000000000022, 0, -0.995575, 2.986726, 53.814159)"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 54 49"
                height="49"
                x="0"
                y="0"
              >
                <g>
                  <g clip-path="url(#f35a7a0876)">
                    <g clip-path="url(#ce80d8ab11)">
                      <g clip-path="url(#d765ba5026)">
                        <g mask="url(#4a5d4d3256)">
                          <rect
                            x="-27.86"
                            fill="url(#79dba733d8)"
                            width="162.72"
                            height="86.784"
                            y="-19.472"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </pattern>
              <clipPath id="0db0c6f41a">
                <path
                  d="M 9 10 L 24 10 L 24 24 L 9 24 Z M 9 10 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="6898edd3d9">
                <path
                  d="M 10.613281 21.070312 C 10.878906 21.433594 11.179688 21.769531 11.511719 22.074219 C 11.847656 22.378906 12.207031 22.648438 12.59375 22.878906 C 12.976562 23.113281 13.382812 23.308594 13.808594 23.460938 C 14.230469 23.617188 14.667969 23.726562 15.113281 23.796875 C 15.558594 23.863281 16.007812 23.890625 16.460938 23.871094 C 16.910156 23.847656 17.355469 23.785156 17.792969 23.679688 C 18.234375 23.570312 18.65625 23.421875 19.066406 23.234375 C 19.476562 23.042969 19.863281 22.8125 20.226562 22.546875 C 20.589844 22.28125 20.925781 21.980469 21.230469 21.648438 C 21.535156 21.316406 21.804688 20.957031 22.039062 20.574219 C 22.273438 20.1875 22.464844 19.785156 22.621094 19.359375 C 22.773438 18.9375 22.886719 18.503906 22.953125 18.058594 C 23.023438 17.613281 23.046875 17.164062 23.027344 16.714844 C 23.007812 16.265625 22.945312 15.820312 22.835938 15.382812 C 22.726562 14.945312 22.578125 14.523438 22.386719 14.113281 C 22.195312 13.707031 21.96875 13.320312 21.699219 12.957031 C 21.433594 12.59375 21.132812 12.261719 20.800781 11.957031 C 20.46875 11.652344 20.109375 11.382812 19.722656 11.148438 C 19.335938 10.914062 18.929688 10.722656 18.507812 10.566406 C 18.082031 10.414062 17.648438 10.300781 17.199219 10.234375 C 16.753906 10.164062 16.304688 10.140625 15.855469 10.160156 C 15.402344 10.179688 14.957031 10.242188 14.519531 10.351562 C 14.082031 10.457031 13.65625 10.605469 13.25 10.796875 C 12.839844 10.988281 12.453125 11.214844 12.089844 11.480469 C 11.722656 11.75 11.390625 12.046875 11.085938 12.378906 C 10.78125 12.710938 10.511719 13.070312 10.277344 13.457031 C 10.042969 13.839844 9.847656 14.246094 9.695312 14.667969 C 9.539062 15.09375 9.429688 15.527344 9.359375 15.972656 C 9.292969 16.417969 9.265625 16.863281 9.285156 17.316406 C 9.308594 17.765625 9.371094 18.207031 9.476562 18.644531 C 9.585938 19.082031 9.734375 19.507812 9.925781 19.914062 C 10.117188 20.324219 10.347656 20.707031 10.613281 21.070312 Z M 10.613281 21.070312 "
                  clip-rule="evenodd"
                />
              </clipPath>
              <clipPath id="edf8f8e9cd">
                <path
                  d="M 0 0 L 54 0 L 54 49 L 0 49 Z M 0 0 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="91a23c007a">
                <path
                  d="M 35.105469 74.691406 L 77.425781 17.144531 L 18.894531 -25.691406 L -23.425781 31.855469 Z M 35.105469 74.691406 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <image
                x="0"
                y="0"
                width="54"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAxCAYAAACRQFplAAAABmJLR0QA/wD/AP+gvaeTAAABbUlEQVRoge3W204bMRSF4Y8hNAQoh54oavv+79WLCkRLQmGaQMrhYnsE3HQykBGptH9pJMtjS2tpby+bJEmSJEmSJEmSJEmSJEmSJEmS5PmsdVw/LN8a/uIP7pYtahksamwL7/EWm6gwR40xfvWi7gUMFliziyN8wr4wWeEav8v/IX70pPFZtBkb4jO+CHMfRNUqzES1RqLyc5z2prQjbcYORAse4qswuV/21cJIU70a52X86rQZ28Ee3uGjMHeIDUywjqkwtINt/4GxDbwR7TgSwg/wrYy/izO2LQJlWPasBNWC6x5H+i1uytydFY37f1VsjisRElNciFgfeGjFc3G2pmXtSrQh7WfsUog/Ey1Xlbl1cTmfCrMT0ZZ1b0o70mZsLOK9ifSZOF9N3E9wIgyeiSqvBG3GrnEsTDUX8shDxDfteYyf/cnszqJPqk0R+btl3FzItajauBd1L6DrI3jg6SN4tnRFSZIkr8k9yItM6UxWhmYAAAAASUVORK5CYII="
                id="d755d54a2a"
                height="49"
                preserveAspectRatio="xMidYMid meet"
              />
              <mask id="3f9e48889b">
                <g filter="url(#d4a937c4c1)">
                  <g>
                    <image
                      x="0"
                      y="0"
                      width="54"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAxCAYAAACRQFplAAAABmJLR0QA/wD/AP+gvaeTAAABbUlEQVRoge3W204bMRSF4Y8hNAQoh54oavv+79WLCkRLQmGaQMrhYnsE3HQykBGptH9pJMtjS2tpby+bJEmSJEmSJEmSJEmSJEmSJEmS5PmsdVw/LN8a/uIP7pYtahksamwL7/EWm6gwR40xfvWi7gUMFliziyN8wr4wWeEav8v/IX70pPFZtBkb4jO+CHMfRNUqzES1RqLyc5z2prQjbcYORAse4qswuV/21cJIU70a52X86rQZ28Ee3uGjMHeIDUywjqkwtINt/4GxDbwR7TgSwg/wrYy/izO2LQJlWPasBNWC6x5H+i1uytydFY37f1VsjisRElNciFgfeGjFc3G2pmXtSrQh7WfsUog/Ey1Xlbl1cTmfCrMT0ZZ1b0o70mZsLOK9ifSZOF9N3E9wIgyeiSqvBG3GrnEsTDUX8shDxDfteYyf/cnszqJPqk0R+btl3FzItajauBd1L6DrI3jg6SN4tnRFSZIkr8k9yItM6UxWhmYAAAAASUVORK5CYII="
                      height="49"
                      preserveAspectRatio="xMidYMid meet"
                    />
                  </g>
                </g>
              </mask>
              <radialGradient
                gradientTransform="matrix(-0.807253, -0.59082, 0.592249, -0.805305, 15.637428, 54.615814)"
                gradientUnits="userSpaceOnUse"
                r="6.897728"
                cx="12.393938"
                id="50df44fd2a"
                cy="12.827228"
                fx="12.393938"
                fy="12.827228"
              >
                <stop
                  stop-opacity="1"
                  stop-color="rgb(100%, 100%, 100%)"
                  offset="0"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(100%, 100%, 100%)"
                  offset="1"
                />
              </radialGradient>
              <clipPath id="c75beebe19">
                <rect x="0" width="54" y="0" height="49" />
              </clipPath>
              <pattern
                id="c56c3a7a15"
                patternUnits="userSpaceOnUse"
                width="54"
                patternTransform="matrix(0.995575, 0.00000000000000022, 0, -0.995575, 2.986726, 53.814159)"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 54 49"
                height="49"
                x="0"
                y="0"
              >
                <g>
                  <g clip-path="url(#c75beebe19)">
                    <g clip-path="url(#edf8f8e9cd)">
                      <g clip-path="url(#91a23c007a)">
                        <g mask="url(#3f9e48889b)">
                          <rect
                            x="-27.86"
                            fill="url(#50df44fd2a)"
                            width="162.72"
                            height="86.784"
                            y="-19.472"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </pattern>
              <clipPath id="26ebcd3c75">
                <path
                  d="M 20 9 L 36 9 L 36 25 L 20 25 Z M 20 9 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="0bfd888dc8">
                <path
                  d="M 22.085938 21.117188 C 22.375 21.511719 22.699219 21.871094 23.058594 22.199219 C 23.417969 22.527344 23.804688 22.816406 24.222656 23.070312 C 24.640625 23.324219 25.074219 23.53125 25.535156 23.699219 C 25.992188 23.863281 26.460938 23.984375 26.945312 24.058594 C 27.425781 24.132812 27.910156 24.160156 28.398438 24.136719 C 28.882812 24.117188 29.363281 24.046875 29.835938 23.933594 C 30.308594 23.816406 30.769531 23.65625 31.210938 23.449219 C 31.652344 23.246094 32.070312 23 32.460938 22.710938 C 32.855469 22.421875 33.214844 22.101562 33.542969 21.742188 C 33.875 21.382812 34.164062 20.996094 34.417969 20.578125 C 34.671875 20.164062 34.878906 19.726562 35.046875 19.269531 C 35.210938 18.8125 35.332031 18.34375 35.40625 17.863281 C 35.480469 17.382812 35.507812 16.898438 35.484375 16.414062 C 35.464844 15.929688 35.394531 15.449219 35.277344 14.976562 C 35.164062 14.503906 35 14.046875 34.796875 13.605469 C 34.589844 13.167969 34.339844 12.75 34.054688 12.359375 C 33.765625 11.964844 33.441406 11.605469 33.082031 11.277344 C 32.722656 10.949219 32.335938 10.660156 31.917969 10.40625 C 31.5 10.152344 31.0625 9.945312 30.605469 9.777344 C 30.148438 9.613281 29.679688 9.492188 29.195312 9.417969 C 28.714844 9.34375 28.230469 9.316406 27.742188 9.339844 C 27.257812 9.359375 26.777344 9.429688 26.304688 9.542969 C 25.828125 9.660156 25.371094 9.820312 24.929688 10.027344 C 24.488281 10.230469 24.070312 10.476562 23.679688 10.765625 C 23.285156 11.054688 22.925781 11.375 22.59375 11.734375 C 22.265625 12.09375 21.976562 12.480469 21.722656 12.898438 C 21.46875 13.3125 21.261719 13.75 21.09375 14.207031 C 20.925781 14.664062 20.808594 15.132812 20.734375 15.613281 C 20.660156 16.09375 20.632812 16.578125 20.65625 17.0625 C 20.675781 17.546875 20.746094 18.027344 20.863281 18.5 C 20.976562 18.972656 21.140625 19.429688 21.34375 19.867188 C 21.550781 20.308594 21.796875 20.726562 22.085938 21.117188 Z M 22.085938 21.117188 "
                  clip-rule="evenodd"
                />
              </clipPath>
              <clipPath id="c465d37f4b">
                <path
                  d="M 0 0 L 54 0 L 54 49 L 0 49 Z M 0 0 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <clipPath id="751c27fb69">
                <path
                  d="M 35.105469 74.699219 L 77.421875 17.144531 L 18.894531 -25.699219 L -23.421875 31.855469 Z M 35.105469 74.699219 "
                  clip-rule="nonzero"
                />
              </clipPath>
              <image
                x="0"
                y="0"
                width="54"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAxCAYAAACRQFplAAAABmJLR0QA/wD/AP+gvaeTAAABjklEQVRoge3Wa28SQRSA4WcppdZavOAlmvj//1q1pdQCBQuoH84sq340M40fzptMNmwme+bNuTAkSZIkSZIkSZIkSZIkSZIkSZIk/07X8NsTPC/PDnts8NAw5pFWYu/wCi9wZhBb4x5zIdmMceXvdfiID5hhimcY4RErLITslRBtQm2xt0Kql3stynGE7/j22+9DebevfAbUFTsTIjMh9UmU5FSIPOAWJ4Z+W4qyrE5NsQtc4iXe4L2Qm5U492KQ7EQJLkQP/vdiE5G1cyE5FaX52dBTWyF0LnpvIjJ4qHgORInUoitrVNYJToXE1CAx+ms1mcw1M7Yv61EMhY0ovyshuBB9ti17dmV/9WxRV2wrDr4S028uhDYiU2tc404MjXXZ/7PiGY7UFFsKoYUY6WORlVtRclshdV3e9YJNqP0/NheDYiTKbCkkO1F+/Xj/Up6ryvGP1BZbi546iBK8FNOvM4z5O9zga+XYf9Dqrngq7ooXhrvizjBQmmWqp+Xtvmdc4hzw4wniJUnyBPwCWiVeVKGhwMkAAAAASUVORK5CYII="
                id="f3d0248e33"
                height="49"
                preserveAspectRatio="xMidYMid meet"
              />
              <mask id="fba9aefffb">
                <g filter="url(#d4a937c4c1)">
                  <g>
                    <image
                      x="0"
                      y="0"
                      width="54"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAxCAYAAACRQFplAAAABmJLR0QA/wD/AP+gvaeTAAABjklEQVRoge3Wa28SQRSA4WcppdZavOAlmvj//1q1pdQCBQuoH84sq340M40fzptMNmwme+bNuTAkSZIkSZIkSZIkSZIkSZIkSZIk/07X8NsTPC/PDnts8NAw5pFWYu/wCi9wZhBb4x5zIdmMceXvdfiID5hhimcY4RErLITslRBtQm2xt0Kql3stynGE7/j22+9DebevfAbUFTsTIjMh9UmU5FSIPOAWJ4Z+W4qyrE5NsQtc4iXe4L2Qm5U492KQ7EQJLkQP/vdiE5G1cyE5FaX52dBTWyF0LnpvIjJ4qHgORInUoitrVNYJToXE1CAx+ms1mcw1M7Yv61EMhY0ovyshuBB9ti17dmV/9WxRV2wrDr4S028uhDYiU2tc404MjXXZ/7PiGY7UFFsKoYUY6WORlVtRclshdV3e9YJNqP0/NheDYiTKbCkkO1F+/Xj/Up6ryvGP1BZbi546iBK8FNOvM4z5O9zga+XYf9Dqrngq7ooXhrvizjBQmmWqp+Xtvmdc4hzw4wniJUnyBPwCWiVeVKGhwMkAAAAASUVORK5CYII="
                      height="49"
                      preserveAspectRatio="xMidYMid meet"
                    />
                  </g>
                </g>
              </mask>
              <radialGradient
                gradientTransform="matrix(-0.80718, -0.590876, 0.592202, -0.805372, 27.794245, 56.296974)"
                gradientUnits="userSpaceOnUse"
                r="7.445495"
                cx="13.378174"
                id="79ac5e1865"
                cy="13.845873"
                fx="13.378174"
                fy="13.845873"
              >
                <stop
                  stop-opacity="1"
                  stop-color="rgb(100%, 100%, 100%)"
                  offset="0"
                />
                <stop
                  stop-opacity="1"
                  stop-color="rgb(100%, 100%, 100%)"
                  offset="1"
                />
              </radialGradient>
              <clipPath id="f8d424ec6e">
                <rect x="0" width="54" y="0" height="49" />
              </clipPath>
              <pattern
                id="64cd2340a4"
                patternUnits="userSpaceOnUse"
                width="54"
                patternTransform="matrix(0.995575, 0, 0, -0.995575, 2.986726, 53.814159)"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 54 49"
                height="49"
                x="0"
                y="0"
              >
                <g>
                  <g clip-path="url(#f8d424ec6e)">
                    <g clip-path="url(#c465d37f4b)">
                      <g clip-path="url(#751c27fb69)">
                        <g mask="url(#fba9aefffb)">
                          <rect
                            x="-27.86"
                            fill="url(#79ac5e1865)"
                            width="162.72"
                            height="86.784"
                            y="-19.472"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </pattern>
            </defs>
            <g clip-path="url(#a530651987)">
              <g clip-path="url(#6af3458a6a)">
                <path
                  fill="url(#3383dc39fb)"
                  d="M 7.949219 33.105469 L 49.300781 33.105469 L 49.300781 52.082031 L 7.949219 52.082031 Z M 7.949219 33.105469 "
                  fill-rule="nonzero"
                />
              </g>
            </g>
            <g clip-path="url(#14a6edf158)">
              <g clip-path="url(#7fe382377e)">
                <path
                  fill="url(#fa10f768e1)"
                  d="M 8.496094 7.878906 L 8.496094 47.472656 L 48.183594 47.472656 L 48.183594 7.878906 Z M 8.496094 7.878906 "
                  fill-rule="nonzero"
                />
              </g>
            </g>
            <g clip-path="url(#28756239cd)">
              <path
                stroke-linecap="butt"
                transform="matrix(1.023444, 0, 0, 1.020975, 3.193879, 3.696106)"
                fill="none"
                stroke-linejoin="miter"
                d="M 43.959152 23.487034 C 43.959152 34.196007 35.275998 42.8772 24.569955 42.8772 C 13.863913 42.8772 5.180759 34.196007 5.180759 23.487034 C 5.180759 12.774235 13.860096 4.096868 24.569955 4.096868 C 35.279814 4.096868 43.959152 12.778061 43.959152 23.487034 Z M 43.959152 23.487034 "
                stroke="#39396c"
                stroke-width="1"
                stroke-opacity="1"
                stroke-miterlimit="4"
              />
            </g>
            <path
              fill="#204a87"
              d="M 47.628906 24.710938 L 47.078125 25.328125 C 46.742188 24.933594 46.367188 24.601562 45.984375 24.253906 L 45.144531 24.378906 L 44.375 23.511719 L 44.375 24.585938 L 45.03125 25.082031 L 45.472656 25.574219 L 46.054688 24.914062 C 46.203125 25.191406 46.347656 25.464844 46.496094 25.742188 L 46.496094 26.566406 L 45.835938 27.308594 L 44.628906 28.132812 L 43.71875 29.042969 L 43.132812 28.382812 L 43.425781 27.636719 L 42.839844 26.976562 L 41.855469 24.875 L 41.011719 23.925781 L 40.792969 24.171875 L 41.125 25.371094 L 41.742188 26.070312 C 42.097656 27.09375 42.449219 28.066406 42.914062 29.042969 C 43.636719 29.042969 44.316406 28.964844 45.03125 28.875 L 45.03125 29.453125 L 44.15625 31.601562 L 43.351562 32.507812 L 42.695312 33.910156 L 42.695312 36.222656 L 42.914062 37.128906 L 42.550781 37.542969 L 41.742188 38.039062 L 40.902344 38.738281 L 41.597656 39.523438 L 40.648438 40.347656 L 40.832031 40.882812 L 39.40625 42.492188 L 38.457031 42.492188 L 37.652344 42.988281 L 37.140625 42.988281 L 37.140625 42.328125 L 36.921875 41.007812 C 36.636719 40.179688 36.34375 39.355469 36.042969 38.53125 C 36.042969 37.925781 36.082031 37.324219 36.117188 36.71875 L 36.484375 35.890625 L 35.96875 34.902344 L 36.007812 33.539062 L 35.3125 32.757812 L 35.660156 31.621094 L 35.09375 30.980469 L 34.105469 30.980469 L 33.777344 30.609375 L 32.792969 31.230469 L 32.390625 30.773438 L 31.476562 31.558594 L 29.613281 29.453125 L 28.882812 27.722656 L 29.539062 26.730469 L 29.175781 26.320312 L 29.976562 24.421875 C 30.636719 23.601562 31.328125 22.816406 32.023438 22.027344 L 33.265625 21.699219 L 34.65625 21.53125 L 35.605469 21.78125 L 36.957031 23.140625 L 37.433594 22.605469 L 38.089844 22.523438 L 39.332031 22.933594 L 40.28125 22.933594 L 40.941406 22.355469 L 41.234375 21.945312 L 40.574219 21.53125 L 39.476562 21.449219 C 39.171875 21.027344 38.890625 20.585938 38.527344 20.210938 L 38.164062 20.378906 L 38.015625 21.449219 L 37.359375 20.707031 L 37.214844 19.882812 L 36.484375 19.304688 L 36.191406 19.304688 L 36.921875 20.128906 L 36.628906 20.871094 L 36.042969 21.039062 L 36.410156 20.292969 L 35.75 19.964844 L 35.167969 19.304688 L 34.070312 19.550781 L 33.925781 19.882812 L 33.265625 20.292969 L 32.902344 21.203125 L 31.988281 21.65625 L 31.585938 21.203125 L 31.148438 21.203125 L 31.148438 19.71875 L 32.097656 19.222656 L 32.828125 19.222656 L 32.679688 18.644531 L 32.097656 18.066406 L 33.082031 17.859375 L 33.632812 17.242188 L 34.070312 16.5 L 34.875 16.5 L 34.65625 15.921875 L 35.167969 15.589844 L 35.167969 16.25 L 36.261719 16.5 L 37.359375 15.589844 L 37.433594 15.179688 L 38.382812 14.519531 C 38.039062 14.5625 37.695312 14.59375 37.359375 14.683594 L 37.359375 13.941406 L 37.722656 13.113281 L 37.359375 13.113281 L 36.554688 13.855469 L 36.335938 14.269531 L 36.554688 14.847656 L 36.191406 15.839844 L 35.605469 15.507812 L 35.09375 14.929688 L 34.289062 15.507812 L 33.996094 14.1875 L 35.386719 13.28125 L 35.386719 12.785156 L 36.261719 12.207031 L 37.652344 11.875 L 38.601562 12.207031 L 40.355469 12.539062 L 39.917969 13.03125 L 38.96875 13.03125 L 39.917969 14.023438 L 40.648438 13.199219 L 40.871094 12.835938 C 40.871094 12.835938 43.671875 15.339844 45.273438 18.082031 C 46.875 20.820312 47.628906 24.054688 47.628906 24.710938 Z M 47.628906 24.710938 "
              fill-opacity="0.713"
              fill-rule="nonzero"
            />
            <path
              fill="#204a87"
              d="M 29.527344 13.199219 L 29.457031 13.691406 L 29.96875 14.023438 L 30.84375 13.445312 L 30.40625 12.949219 L 29.820312 13.28125 L 29.527344 13.199219 "
              fill-opacity="0.713"
              fill-rule="nonzero"
            />
            <path
              fill="#204a87"
              d="M 30.332031 9.816406 L 28.433594 9.070312 L 26.242188 9.320312 L 23.535156 10.0625 L 23.023438 10.558594 L 24.707031 11.710938 L 24.707031 12.371094 L 24.046875 13.03125 L 24.925781 14.765625 L 25.507812 14.433594 L 26.242188 13.28125 C 27.371094 12.933594 28.382812 12.539062 29.457031 12.042969 L 30.332031 9.816406 "
              fill-opacity="0.713"
              fill-rule="nonzero"
            />
            <path
              fill="#204a87"
              d="M 32.304688 16.746094 L 32.015625 16.003906 L 31.5 16.167969 L 31.648438 17.074219 L 32.304688 16.746094 "
              fill-opacity="0.713"
              fill-rule="nonzero"
            />
            <path
              fill="#204a87"
              d="M 32.597656 16.582031 L 32.453125 17.570312 L 33.253906 17.40625 L 33.839844 16.828125 L 33.328125 16.332031 C 33.15625 15.878906 32.960938 15.449219 32.746094 15.011719 L 32.304688 15.011719 L 32.304688 15.507812 L 32.597656 15.839844 L 32.597656 16.582031 "
              fill-opacity="0.713"
              fill-rule="nonzero"
            />
            <path
              fill="#204a87"
              d="M 21.78125 32.261719 L 21.195312 31.105469 L 20.101562 30.855469 L 19.515625 29.289062 L 18.054688 29.453125 L 16.8125 28.546875 L 15.496094 29.703125 L 15.496094 29.882812 C 15.097656 29.769531 14.609375 29.753906 14.253906 29.535156 L 13.960938 28.710938 L 13.960938 27.804688 L 13.085938 27.886719 L 13.304688 26.152344 L 12.792969 26.152344 L 12.28125 26.8125 L 11.769531 27.0625 L 11.039062 26.648438 L 10.964844 25.742188 L 11.113281 24.75 L 12.207031 23.925781 L 13.085938 23.925781 L 13.230469 23.429688 L 14.328125 23.675781 L 15.132812 24.667969 L 15.277344 23.015625 L 16.664062 21.863281 L 17.175781 20.625 L 18.199219 20.210938 L 18.785156 19.386719 L 20.101562 19.140625 L 20.757812 18.148438 L 18.785156 18.148438 L 20.027344 17.570312 L 20.902344 17.570312 L 22.148438 17.160156 L 22.292969 16.664062 L 21.855469 16.25 L 21.34375 16.085938 L 21.488281 15.589844 L 21.125 14.847656 L 20.246094 15.179688 L 20.394531 14.519531 L 19.371094 13.941406 L 18.566406 15.34375 L 18.640625 15.835938 L 17.835938 16.167969 L 17.324219 17.242188 L 17.105469 16.25 L 15.714844 15.671875 L 15.496094 14.929688 L 17.324219 13.855469 L 18.128906 13.113281 L 18.199219 12.207031 L 17.761719 11.960938 L 17.175781 11.875 L 16.8125 12.785156 C 16.8125 12.785156 16.199219 12.90625 16.042969 12.941406 C 14.035156 14.789062 9.980469 18.769531 9.039062 26.289062 C 9.078125 26.464844 9.722656 27.472656 9.722656 27.472656 L 11.257812 28.382812 L 12.792969 28.792969 L 13.449219 29.621094 L 14.472656 30.363281 L 15.058594 30.28125 L 15.496094 30.476562 L 15.496094 30.609375 L 14.910156 32.179688 L 14.472656 32.839844 L 14.621094 33.167969 L 14.253906 34.40625 L 15.570312 36.800781 L 16.886719 37.953125 L 17.46875 38.78125 L 17.394531 40.511719 L 17.835938 41.503906 L 17.394531 43.402344 C 17.394531 43.402344 17.363281 43.390625 17.417969 43.578125 C 17.472656 43.769531 19.757812 45.035156 19.90625 44.925781 L 20.171875 44.722656 L 20.027344 44.308594 L 20.613281 43.730469 L 20.832031 43.152344 L 21.78125 42.824219 L 22.511719 41.007812 L 22.292969 40.511719 L 22.804688 39.769531 L 23.902344 39.523438 L 24.484375 38.203125 L 24.339844 36.550781 L 25.214844 35.3125 L 25.363281 34.074219 C 24.164062 33.480469 22.972656 32.871094 21.78125 32.261719 "
              fill-opacity="0.713"
              fill-rule="nonzero"
            />
            <path
              fill="#204a87"
              d="M 20.175781 13.527344 L 20.90625 14.023438 L 21.488281 14.023438 L 21.488281 13.445312 L 20.757812 13.113281 L 20.175781 13.527344 "
              fill-opacity="0.713"
              fill-rule="nonzero"
            />
            <path
              fill="#204a87"
              d="M 18.273438 12.867188 L 17.910156 13.773438 L 18.640625 13.773438 L 19.003906 12.949219 L 19.953125 12.289062 L 20.6875 12.539062 L 22.148438 13.527344 L 22.878906 12.867188 L 22.074219 12.539062 L 21.707031 11.792969 L 20.320312 11.628906 L 20.246094 11.21875 L 19.589844 11.382812 L 19.296875 11.960938 L 18.929688 11.21875 L 18.785156 11.546875 L 18.859375 12.371094 L 18.273438 12.867188 "
              fill-opacity="0.713"
              fill-rule="nonzero"
            />
            <path
              fill="#204a87"
              d="M 20.90625 10.804688 L 21.269531 10.472656 L 22 10.308594 C 22.5 10.066406 23.003906 9.902344 23.535156 9.730469 L 23.246094 9.234375 L 22.300781 9.371094 L 21.855469 9.816406 L 21.121094 9.921875 L 20.464844 10.226562 L 20.148438 10.378906 L 19.953125 10.640625 L 20.90625 10.804688 "
              fill-opacity="0.713"
              fill-rule="nonzero"
            />
            <path
              fill="#204a87"
              d="M 22.148438 18.644531 L 22.585938 17.984375 L 21.929688 17.488281 L 22.148438 18.644531 "
              fill-opacity="0.713"
              fill-rule="nonzero"
            />
            <g clip-path="url(#7302eb2433)">
              <path
                stroke-linecap="butt"
                transform="matrix(1.023444, 0, 0, 1.020975, 3.193879, 3.696106)"
                fill="none"
                stroke-linejoin="miter"
                d="M 42.974425 23.487034 C 42.974425 33.652715 34.734016 41.893918 24.569955 41.893918 C 14.405894 41.893918 6.161669 33.652715 6.161669 23.487034 C 6.161669 13.321353 14.402077 5.08015 24.569955 5.08015 C 34.734016 5.08015 42.974425 13.321353 42.974425 23.487034 Z M 42.974425 23.487034 "
                stroke="url(#a5dd0559e2)"
                stroke-width="1"
                stroke-miterlimit="4"
              />
            </g>
            <path
              stroke-linecap="round"
              transform="matrix(1.157515, 0.62596, -0.487732, 0.89758, 58.552972, 20.076631)"
              fill="none"
              stroke-linejoin="round"
              d="M -2.829373 21.040852 C -2.827536 21.661905 -2.929458 22.276981 -3.131113 22.887626 C -3.332768 23.498271 -3.630583 24.088938 -4.027167 24.661444 C -4.419725 25.235495 -4.906061 25.779202 -5.480732 26.297474 C -6.052796 26.813926 -6.705596 27.29094 -7.435108 27.73006 C -8.167228 28.170999 -8.961828 28.559766 -9.821288 28.906727 C -10.67814 29.251869 -11.585622 29.540928 -12.540897 29.78063 C -13.494982 30.015149 -14.478377 30.196126 -15.4925 30.320195 C -16.505432 30.439083 -17.52919 30.50024 -18.562583 30.498486 C -19.594559 30.500095 -20.618878 30.439788 -21.631513 30.31911 C -22.644148 30.198431 -23.627806 30.018377 -24.582488 29.778948 C -25.535753 29.542882 -26.442749 29.248436 -27.301831 28.90752 C -28.159722 28.561422 -28.956433 28.168306 -29.685329 27.727896 C -30.416834 27.289306 -31.069638 26.813239 -31.642551 26.294513 C -32.216656 25.78097 -32.699983 25.234584 -33.096333 24.662357 C -33.494101 24.086766 -33.78998 23.496696 -33.992021 22.889056 C -34.192871 22.276234 -34.295405 21.664479 -34.294634 21.041608 C -34.293862 20.418737 -34.194549 19.805479 -33.991476 19.198198 C -33.789821 18.587553 -33.492006 17.996886 -33.09684 17.421016 C -32.700257 16.84851 -32.217946 16.303258 -31.641857 15.78835 C -31.069794 15.271898 -30.416993 14.794884 -29.684873 14.353945 C -28.955361 13.914825 -28.162179 13.522695 -27.301301 13.179097 C -26.444449 12.833955 -25.538385 12.541533 -24.581692 12.305194 C -23.629025 12.067311 -22.645629 11.886335 -21.630089 11.765629 C -20.617158 11.646741 -19.5934 11.585584 -18.561424 11.583974 C -17.52803 11.585729 -16.503712 11.646036 -15.491077 11.766714 C -14.478442 11.887393 -13.494783 12.067447 -12.541518 12.303513 C -11.586836 12.542942 -10.67865 12.832206 -9.820758 13.178304 C -8.962867 13.524402 -8.167574 13.914155 -7.436069 14.352745 C -6.707173 14.793154 -6.052951 15.272585 -5.478847 15.786128 C -4.905934 16.304854 -4.419998 16.849421 -4.026256 17.423467 C -3.629906 17.995694 -3.33261 18.589128 -3.130569 19.196768 C -2.928528 19.804408 -2.827184 20.421345 -2.829373 21.040852 Z M -2.829373 21.040852 "
              stroke="url(#c906aef455)"
              stroke-width="0.882"
              stroke-miterlimit="4"
            />
            <path
              stroke-linecap="round"
              transform="matrix(0.961351, -0.897529, 0.699329, 0.745445, 36.265436, -0.849275)"
              fill="none"
              stroke-linejoin="round"
              d="M -2.828386 21.042097 C -2.827737 21.661218 -2.930145 22.27678 -3.131411 22.888599 C -3.332811 23.495015 -3.631172 24.089493 -4.026761 24.661229 C -4.420184 25.235572 -4.906771 25.781587 -5.480293 26.296294 C -6.053815 26.811 -6.706008 27.288627 -7.436873 27.729173 C -8.167738 28.169719 -8.960749 28.56164 -9.820106 28.905121 C -10.679463 29.248602 -11.58634 29.540108 -12.540737 29.779639 C -13.495135 30.01917 -14.478361 30.197789 -15.492449 30.31829 C -16.506537 30.438791 -17.528463 30.497453 -18.562292 30.499862 C -19.594089 30.499479 -20.618963 30.439307 -21.630684 30.31637 C -22.644438 30.196226 -23.628112 30.017975 -24.581707 29.781618 C -25.537468 29.542652 -26.442024 29.250054 -27.301606 28.906803 C -28.159156 28.560758 -28.954805 28.168719 -29.686521 27.727893 C -30.416071 27.289675 -31.068826 26.812917 -31.642752 26.294824 C -32.216545 25.782133 -32.700813 25.235746 -33.095423 24.661065 C -33.492065 24.089178 -33.790518 23.494027 -33.990515 22.886416 C -34.19471 22.27899 -34.294084 21.661527 -34.294734 21.042406 C -34.293351 20.420491 -34.192975 19.807723 -33.991709 19.195904 C -33.790309 18.589487 -33.491949 17.99501 -33.096359 17.423274 C -32.702936 16.84893 -32.216349 16.302916 -31.642827 15.788209 C -31.069306 15.273502 -30.41508 14.793083 -29.686247 14.35533 C -28.955382 13.914784 -28.162371 13.522863 -27.303014 13.179382 C -26.441625 12.833108 -25.534748 12.541602 -24.582383 12.304864 C -23.627985 12.065333 -22.644759 11.886714 -21.630671 11.766213 C -20.616583 11.645712 -19.592625 11.584257 -18.560828 11.58464 C -17.529031 11.585024 -16.504157 11.645195 -15.492436 11.768133 C -14.478682 11.888277 -13.495008 12.066528 -12.541413 12.302885 C -11.585652 12.541851 -10.679064 12.831655 -9.821514 13.1777 C -8.961932 13.520951 -8.168315 13.915783 -7.436599 14.356609 C -6.707049 14.794827 -6.054295 15.271586 -5.480368 15.789679 C -4.906575 16.30237 -4.422307 16.848757 -4.025665 17.420644 C -3.631055 17.995325 -3.33057 18.587682 -3.130573 19.195293 C -2.92841 19.805512 -2.827004 20.420183 -2.828386 21.042097 Z M -2.828386 21.042097 "
              stroke="url(#2b26372e37)"
              stroke-width="0.882"
              stroke-miterlimit="4"
            />
            <g clip-path="url(#50d79c0464)">
              <g clip-path="url(#488131d701)">
                <path
                  fill="url(#48efd66746)"
                  d="M 41.222656 22.65625 L 21.078125 37.398438 L 35.859375 57.496094 L 56.003906 42.753906 Z M 41.222656 22.65625 "
                  fill-rule="evenodd"
                />
              </g>
            </g>
            <path
              fill="#ffffff"
              d="M 36.324219 41.699219 C 36.539062 41.992188 36.804688 42.234375 37.117188 42.421875 C 37.425781 42.609375 37.761719 42.734375 38.125 42.789062 C 38.484375 42.84375 38.839844 42.828125 39.195312 42.742188 C 39.550781 42.65625 39.875 42.503906 40.167969 42.289062 C 40.460938 42.074219 40.703125 41.8125 40.890625 41.5 C 41.082031 41.1875 41.203125 40.855469 41.257812 40.492188 C 41.3125 40.132812 41.296875 39.777344 41.210938 39.425781 C 41.125 39.070312 40.972656 38.75 40.757812 38.453125 C 40.542969 38.160156 40.277344 37.921875 39.964844 37.730469 C 39.65625 37.542969 39.320312 37.421875 38.957031 37.367188 C 38.597656 37.308594 38.242188 37.324219 37.886719 37.414062 C 37.53125 37.5 37.207031 37.648438 36.914062 37.863281 C 36.621094 38.082031 36.378906 38.34375 36.1875 38.65625 C 36 38.964844 35.878906 39.300781 35.824219 39.660156 C 35.769531 40.019531 35.785156 40.375 35.871094 40.730469 C 35.957031 41.082031 36.109375 41.40625 36.324219 41.699219 Z M 36.324219 41.699219 "
              fill-opacity="1"
              fill-rule="evenodd"
            />
            <path
              stroke-linecap="round"
              transform="matrix(-1.310315, -0.128806, 0.100359, -1.016054, 0.732497, 45.070098)"
              fill="none"
              stroke-linejoin="round"
              d="M -2.828737 21.041962 C -2.828733 21.664776 -2.927911 22.277095 -3.131593 22.887285 C -3.332322 23.4971 -3.629863 24.088432 -4.02717 24.661655 C -4.421524 25.234504 -4.907369 25.780506 -5.479092 26.295105 C -6.053475 26.813885 -6.705754 27.288717 -7.435052 27.731023 C -8.167595 28.169896 -8.960609 28.558767 -9.819416 28.906 C -10.678515 29.249425 -11.586276 29.541351 -12.539746 29.781404 C -13.49646 30.018024 -14.478507 30.196342 -15.491793 30.317109 C -16.505079 30.437875 -17.528936 30.498469 -18.560411 30.498516 C -19.594839 30.498937 -20.618879 30.440374 -21.62987 30.318644 C -22.643814 30.197288 -23.62641 30.018135 -24.580903 29.777751 C -25.538058 29.54155 -26.442614 29.252546 -27.301061 28.903873 C -28.162169 28.559382 -28.955334 28.167832 -29.68646 27.729973 C -30.417586 27.292113 -31.068376 26.813313 -31.64149 26.297754 C -32.217847 25.778762 -32.700601 25.23637 -33.096529 24.659904 C -33.492166 24.087245 -33.790954 23.49462 -33.992602 22.885836 C -34.194249 22.277051 -34.294929 21.663156 -34.294933 21.040343 C -34.294645 20.421337 -34.192806 19.804836 -33.992077 19.19502 C -33.791056 18.589013 -33.493514 17.997681 -33.096208 17.424458 C -32.702145 16.847801 -32.216008 16.305607 -31.641625 15.786826 C -31.069903 15.272227 -30.417916 14.793588 -29.685373 14.354715 C -28.955783 13.916216 -28.160108 13.523164 -27.301009 13.179738 C -26.442202 12.832506 -25.537394 12.540954 -24.58068 12.304334 C -23.626918 12.068089 -22.645162 11.885963 -21.631876 11.765196 C -20.61859 11.64443 -19.594733 11.583836 -18.560306 11.583415 C -17.52883 11.583368 -16.504499 11.645739 -15.490555 11.767094 C -14.479564 11.888824 -13.494015 12.067603 -12.539814 12.304179 C -11.585612 12.540755 -10.680764 12.833567 -9.819656 13.178058 C -8.9615 13.522923 -8.168336 13.914473 -7.436918 14.35614 C -6.705792 14.793999 -6.055002 15.2728 -5.478936 15.787984 C -4.905822 16.303543 -4.419825 16.849368 -4.02714 17.422401 C -3.631504 17.99506 -3.332716 18.587685 -3.131068 19.196469 C -2.92942 19.805254 -2.82874 20.419149 -2.828737 21.041962 Z M -2.828737 21.041962 "
              stroke="url(#9fb19d5948)"
              stroke-width="0.882"
              stroke-miterlimit="4"
            />
            <path
              stroke-linecap="round"
              transform="matrix(0.939388, -0.876997, 0.683353, 0.728394, 31.474699, -3.358831)"
              fill="none"
              stroke-linejoin="round"
              d="M -2.829638 21.041443 C -2.829254 21.663992 -2.930179 22.277184 -3.132276 22.886546 C -3.332156 23.498577 -3.631538 24.087336 -4.025853 24.663688 C -4.420305 25.234513 -4.905668 25.781686 -5.479997 26.29682 C -6.054327 26.811954 -6.706952 27.291811 -7.435929 27.728004 C -8.166986 28.167055 -8.961506 28.561874 -9.819626 28.90693 C -10.679963 29.249318 -11.586714 29.541185 -12.542097 29.779861 C -13.495401 30.015679 -14.480149 30.197548 -15.492184 30.319749 C -16.506436 30.439281 -17.528572 30.501055 -18.563025 30.499734 C -19.595262 30.501081 -20.618333 30.438384 -21.632103 30.317169 C -22.643657 30.198623 -23.626643 30.017942 -24.580925 29.780653 C -25.537423 29.540695 -26.443599 29.248707 -27.301531 28.907549 C -28.159599 28.560864 -28.956398 28.169966 -29.687768 27.729138 C -30.41692 27.290979 -31.06748 26.813376 -31.643744 26.29652 C -32.215712 25.779473 -32.702299 25.236517 -33.097267 24.659076 C -33.492098 24.087163 -33.790603 23.497158 -33.990701 22.886202 C -34.192879 22.278105 -34.294159 21.662782 -34.294543 21.040233 C -34.294789 20.423211 -34.194001 19.804492 -33.991905 19.19513 C -33.791888 18.588627 -33.492642 17.99434 -33.09819 17.423515 C -32.701658 16.849832 -32.216296 16.302659 -31.641966 15.787525 C -31.069853 15.269722 -30.417092 14.795393 -29.686035 14.356341 C -28.957195 13.91462 -28.160458 13.522471 -27.302338 13.177415 C -26.444218 12.832358 -25.537466 12.540491 -24.582083 12.301814 C -23.62878 12.065997 -22.643894 11.889656 -21.631859 11.767455 C -20.617744 11.642395 -19.593392 11.58329 -18.563235 11.584801 C -17.528782 11.586122 -16.505847 11.643292 -15.492077 11.764507 C -14.478307 11.885721 -13.495321 12.066403 -12.541039 12.303692 C -11.586757 12.540981 -10.680582 12.832969 -9.820433 13.176795 C -8.962364 13.523481 -8.165566 13.914379 -7.436413 14.352538 C -6.705043 14.793366 -6.054483 15.270969 -5.47822 15.787825 C -4.906252 16.304872 -4.421745 16.850686 -4.026913 17.4226 C -3.629865 17.997182 -3.331361 18.587187 -3.131263 19.198143 C -2.929085 19.80624 -2.827804 20.421563 -2.829638 21.041443 Z M -2.829638 21.041443 "
              stroke="url(#bc7faed73d)"
              stroke-width="0.902"
              stroke-miterlimit="4"
            />
            <g clip-path="url(#3da1f0991b)">
              <g clip-path="url(#dbd4fb7a0e)">
                <path
                  fill="url(#45b827d4a6)"
                  d="M 17.085938 17.335938 L 1.554688 28.703125 L 12.949219 44.199219 L 28.480469 32.832031 Z M 17.085938 17.335938 "
                  fill-rule="evenodd"
                />
              </g>
            </g>
            <path
              fill="#ffffff"
              d="M 13.308594 32.019531 C 13.476562 32.246094 13.679688 32.429688 13.917969 32.578125 C 14.160156 32.722656 14.417969 32.816406 14.695312 32.859375 C 14.972656 32.902344 15.25 32.890625 15.523438 32.824219 C 15.796875 32.757812 16.046875 32.640625 16.273438 32.472656 C 16.5 32.308594 16.683594 32.105469 16.832031 31.867188 C 16.976562 31.625 17.070312 31.367188 17.113281 31.089844 C 17.15625 30.8125 17.144531 30.539062 17.078125 30.265625 C 17.007812 29.992188 16.894531 29.742188 16.726562 29.519531 C 16.558594 29.292969 16.355469 29.105469 16.117188 28.960938 C 15.875 28.816406 15.617188 28.722656 15.339844 28.679688 C 15.0625 28.636719 14.785156 28.648438 14.511719 28.714844 C 14.238281 28.78125 13.988281 28.898438 13.761719 29.0625 C 13.535156 29.230469 13.351562 29.433594 13.203125 29.671875 C 13.058594 29.910156 12.964844 30.171875 12.921875 30.449219 C 12.878906 30.722656 12.890625 31 12.957031 31.273438 C 13.027344 31.542969 13.140625 31.792969 13.308594 32.019531 Z M 13.308594 32.019531 "
              fill-opacity="1"
              fill-rule="evenodd"
            />
            <g clip-path="url(#0db0c6f41a)">
              <g clip-path="url(#6898edd3d9)">
                <path
                  fill="url(#c56c3a7a15)"
                  d="M 18.226562 3.582031 L 2.695312 14.949219 L 14.089844 30.445312 L 29.621094 19.078125 Z M 18.226562 3.582031 "
                  fill-rule="evenodd"
                />
              </g>
            </g>
            <path
              fill="#ffffff"
              d="M 14.449219 18.265625 C 14.613281 18.492188 14.816406 18.679688 15.058594 18.824219 C 15.300781 18.96875 15.558594 19.0625 15.835938 19.105469 C 16.113281 19.148438 16.390625 19.136719 16.664062 19.070312 C 16.933594 19.003906 17.183594 18.886719 17.410156 18.71875 C 17.636719 18.554688 17.824219 18.351562 17.96875 18.113281 C 18.117188 17.871094 18.210938 17.613281 18.253906 17.335938 C 18.296875 17.058594 18.285156 16.785156 18.214844 16.511719 C 18.148438 16.238281 18.03125 15.992188 17.867188 15.765625 C 17.699219 15.539062 17.496094 15.351562 17.257812 15.207031 C 17.015625 15.0625 16.757812 14.96875 16.480469 14.925781 C 16.203125 14.882812 15.925781 14.894531 15.652344 14.960938 C 15.378906 15.027344 15.128906 15.144531 14.902344 15.308594 C 14.675781 15.476562 14.492188 15.679688 14.34375 15.917969 C 14.199219 16.15625 14.105469 16.417969 14.0625 16.695312 C 14.019531 16.972656 14.03125 17.246094 14.097656 17.519531 C 14.164062 17.789062 14.28125 18.039062 14.449219 18.265625 Z M 14.449219 18.265625 "
              fill-opacity="1"
              fill-rule="evenodd"
            />
            <g clip-path="url(#26ebcd3c75)">
              <g clip-path="url(#0bfd888dc8)">
                <path
                  fill="url(#64cd2340a4)"
                  d="M 30.300781 2.238281 L 13.539062 14.507812 L 25.839844 31.234375 L 42.601562 18.964844 Z M 30.300781 2.238281 "
                  fill-rule="evenodd"
                />
              </g>
            </g>
            <path
              fill="#ffffff"
              d="M 26.226562 18.089844 C 26.40625 18.332031 26.625 18.535156 26.882812 18.691406 C 27.144531 18.847656 27.421875 18.949219 27.722656 18.996094 C 28.023438 19.042969 28.320312 19.027344 28.613281 18.957031 C 28.910156 18.882812 29.179688 18.757812 29.425781 18.578125 C 29.667969 18.398438 29.871094 18.179688 30.027344 17.921875 C 30.183594 17.664062 30.285156 17.382812 30.332031 17.085938 C 30.378906 16.785156 30.363281 16.488281 30.292969 16.195312 C 30.21875 15.902344 30.09375 15.632812 29.914062 15.386719 C 29.734375 15.144531 29.515625 14.945312 29.257812 14.785156 C 28.996094 14.628906 28.71875 14.527344 28.417969 14.480469 C 28.117188 14.4375 27.820312 14.449219 27.527344 14.519531 C 27.230469 14.59375 26.960938 14.71875 26.714844 14.898438 C 26.472656 15.078125 26.269531 15.296875 26.113281 15.554688 C 25.957031 15.8125 25.855469 16.09375 25.808594 16.390625 C 25.761719 16.691406 25.777344 16.988281 25.847656 17.28125 C 25.921875 17.574219 26.046875 17.84375 26.226562 18.089844 Z M 26.226562 18.089844 "
              fill-opacity="1"
              fill-rule="evenodd"
            />
            <g fill="#143a6d" fill-opacity="1">
              <g transform="translate(46.972945, 48.077328)">
                <g>
                  <path d="M 7.839844 -5.675781 C 8.679688 -6.121094 9.222656 -6.90625 9.222656 -8.082031 C 9.222656 -10.0625 7.726562 -11.199219 5.84375 -11.199219 L 1.101562 -11.199219 L 1.101562 0 L 6.273438 0 C 8.140625 0 9.59375 -1.082031 9.59375 -3.0625 C 9.59375 -4.425781 8.886719 -5.265625 7.839844 -5.675781 Z M 6.757812 -7.820312 C 6.757812 -7.167969 6.214844 -6.609375 5.542969 -6.609375 L 3.566406 -6.609375 L 3.566406 -9.015625 L 5.542969 -9.015625 C 6.214844 -9.015625 6.757812 -8.492188 6.757812 -7.820312 Z M 5.917969 -2.183594 L 3.566406 -2.183594 L 3.566406 -4.59375 L 5.917969 -4.59375 C 6.609375 -4.59375 7.128906 -4.03125 7.128906 -3.378906 C 7.128906 -2.707031 6.609375 -2.183594 5.917969 -2.183594 Z M 5.917969 -2.183594 " />
                </g>
              </g>
            </g>
            <g fill="#143a6d" fill-opacity="1">
              <g transform="translate(57.109188, 48.077328)">
                <g>
                  <path d="M 2.332031 -8.71875 C 3.042969 -8.71875 3.640625 -9.316406 3.640625 -10.023438 C 3.640625 -10.753906 3.042969 -11.332031 2.332031 -11.332031 C 1.625 -11.332031 1.027344 -10.753906 1.027344 -10.023438 C 1.027344 -9.316406 1.625 -8.71875 2.332031 -8.71875 Z M 1.140625 0 L 3.507812 0 L 3.507812 -7.46875 L 1.140625 -7.46875 Z M 1.140625 0 " />
                </g>
              </g>
            </g>
            <g fill="#143a6d" fill-opacity="1">
              <g transform="translate(61.775969, 48.077328)">
                <g>
                  <path d="M 4.441406 0.148438 C 6.703125 0.148438 7.953125 -1.027344 7.953125 -2.855469 L 7.953125 -7.46875 L 5.582031 -7.46875 L 5.582031 -3.171875 C 5.582031 -2.464844 5.097656 -1.960938 4.441406 -1.960938 C 3.808594 -1.960938 3.324219 -2.464844 3.324219 -3.171875 L 3.324219 -7.46875 L 0.933594 -7.46875 L 0.933594 -2.855469 C 0.933594 -1.027344 2.183594 0.148438 4.441406 0.148438 Z M 4.441406 0.148438 " />
                </g>
              </g>
            </g>
            <g fill="#143a6d" fill-opacity="1">
              <g transform="translate(70.680181, 48.077328)">
                <g>
                  <path d="M 5.617188 -7.617188 C 4.761719 -7.617188 4.050781 -7.316406 3.492188 -6.8125 L 3.492188 -7.449219 L 1.101562 -7.46875 L 1.101562 4.480469 L 3.492188 4.5 L 3.492188 -0.652344 C 4.050781 -0.148438 4.761719 0.148438 5.617188 0.148438 C 7.671875 0.148438 9.296875 -1.566406 9.296875 -3.734375 C 9.296875 -5.898438 7.671875 -7.617188 5.617188 -7.617188 Z M 5.152344 -1.960938 C 4.164062 -1.960938 3.378906 -2.742188 3.378906 -3.734375 C 3.378906 -4.722656 4.164062 -5.507812 5.152344 -5.507812 C 6.140625 -5.507812 6.925781 -4.722656 6.925781 -3.734375 C 6.925781 -2.742188 6.140625 -1.960938 5.152344 -1.960938 Z M 5.152344 -1.960938 " />
                </g>
              </g>
            </g>
            <g fill="#143a6d" fill-opacity="1">
              <g transform="translate(80.555081, 48.077328)">
                <g>
                  <path d="M 4.742188 0.148438 C 7.242188 0.148438 8.886719 -1.492188 8.886719 -3.734375 C 8.886719 -5.972656 7.242188 -7.617188 4.742188 -7.617188 C 2.238281 -7.617188 0.578125 -5.972656 0.578125 -3.734375 C 0.578125 -1.492188 2.238281 0.148438 4.742188 0.148438 Z M 4.742188 -1.960938 C 3.714844 -1.980469 2.96875 -2.726562 2.96875 -3.734375 C 2.96875 -4.742188 3.714844 -5.488281 4.742188 -5.507812 C 5.75 -5.488281 6.515625 -4.742188 6.515625 -3.734375 C 6.515625 -2.726562 5.75 -1.980469 4.742188 -1.960938 Z M 4.742188 -1.960938 " />
                </g>
              </g>
            </g>
            <g fill="#143a6d" fill-opacity="1">
              <g transform="translate(90.037967, 48.077328)">
                <g>
                  <path d="M 1.101562 0 L 3.492188 0 L 3.492188 -12.785156 L 1.101562 -12.785156 Z M 1.101562 0 " />
                </g>
              </g>
            </g>
            <g fill="#143a6d" fill-opacity="1">
              <g transform="translate(94.630075, 48.077328)">
                <g>
                  <path d="M 1.101562 0 L 3.492188 0 L 3.492188 -12.785156 L 1.101562 -12.785156 Z M 1.101562 0 " />
                </g>
              </g>
            </g>
            <g fill="#143a6d" fill-opacity="1">
              <g transform="translate(100.448414, 37.646574)">
                <g>
                  <path d="M 2.171875 -3.828125 C 1.109375 -3.828125 0.234375 -2.957031 0.234375 -1.886719 C 0.234375 -0.820312 1.109375 0.0507812 2.171875 0.0507812 C 3.242188 0.0507812 4.109375 -0.820312 4.109375 -1.886719 C 4.109375 -2.957031 3.242188 -3.828125 2.171875 -3.828125 Z M 2.171875 -0.371094 C 1.320312 -0.371094 0.65625 -1.039062 0.65625 -1.886719 C 0.65625 -2.738281 1.320312 -3.40625 2.171875 -3.40625 C 3.027344 -3.40625 3.6875 -2.738281 3.6875 -1.886719 C 3.6875 -1.039062 3.027344 -0.371094 2.171875 -0.371094 Z M 2.902344 -2.265625 C 2.902344 -2.59375 2.632812 -2.859375 2.296875 -2.859375 L 1.636719 -2.859375 L 1.636719 -0.917969 L 2.019531 -0.917969 L 2.019531 -1.675781 L 2.179688 -1.675781 L 2.601562 -0.917969 L 3.035156 -0.917969 L 2.582031 -1.742188 C 2.769531 -1.84375 2.902344 -2.039062 2.902344 -2.265625 Z M 2.019531 -2.472656 L 2.296875 -2.472656 C 2.417969 -2.472656 2.511719 -2.378906 2.511719 -2.265625 C 2.511719 -2.148438 2.410156 -2.058594 2.296875 -2.058594 L 2.019531 -2.058594 Z M 2.019531 -2.472656 " />
                </g>
              </g>
            </g>
          </svg> */}
          <img src="Buipoll_nav.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link style={{ color: "#143a6d" }} as={Link} to="/about">
                Sobre nosotros
              </Nav.Link>
              <Nav.Link style={{ color: "#143a6d" }} as={Link} to="/services">
                Servicios
              </Nav.Link>
              {/* <Nav.Link
                                style={{ color: "#143a6d" }}
                                as={Link}
                                to="/team"
                            >
                                Equipo
                            </Nav.Link> */}
              <NavDropdown
                style={{ color: "#143a6d" }}
                title="Descubre"
                id="offcanvasNavbarDropdown"
              >
                <NavDropdown.Item as={Link} to="/stats">
                  Estadisticas
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/pollster">
                  Trabaja con nosotros
                </NavDropdown.Item>
                {/* <NavDropdown.Item as={Link} to="/testimonials">
                                    Testimonios
                                </NavDropdown.Item> */}
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/contact">
                  Contáctanos
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
