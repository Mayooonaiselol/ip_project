import sys
import subprocess

try:
    import pandas
except:
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'pandas'])

    reqs = subprocess.check_output([sys.executable, '-m', 'pip', 'freeze'])
    installed_packages = [r.decode().split('==')[0] for r in reqs.split()]
    print(installed_packages)
