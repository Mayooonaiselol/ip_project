import os
from os.path import dirname, join, exists, expanduser
import platform

def get_user_data_dir(name):
    # Determine and return the user_data_dir.
    data_dir = ""
    if platform.system() == 'Windows':
        data_dir = os.path.join(os.environ['APPDATA'], name)
    elif platform.system() == 'Darwin':
        data_dir = '~/Library/Application Support/{}'.format(name)
        data_dir = expanduser(data_dir)
    elif platform.system() == 'Linux':
        data_dir = os.environ.get('XDG_CONFIG_HOME', '~/.config')
        data_dir = expanduser(join(data_dir, name))
    if not exists(data_dir):
        os.mkdir(data_dir)
    return data_dir
