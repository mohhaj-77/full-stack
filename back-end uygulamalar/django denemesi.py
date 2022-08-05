import os
import sys

def main():
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'multipledbms.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "emin misin "
            " PYTHONPATH a dikkat et "
            "hiçbir şey unuttun mu?"
        ) from exc
    execute_from_command_line(sys.argv)

if __name__ == '__main__':
    main()
